#import "ViewController.h"
#import "RQCodeViewController.h"
#import "ImagePicViewController.h"

#define KWidth CGRectMake(0, 20, CGRectGetWidth(self.view.bounds), CGRectGetHeight(self.view.bounds) - 20)

@interface ViewController ()<UIWebViewDelegate, ImagePicViewControllerDelegate>

@property (nonatomic, strong)UIWebView *webView;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
//    创建视图
    self.webView = [[UIWebView alloc] initWithFrame:KWidth];
//    设置代理，通知数据
    self.webView.delegate = self;
//    添加视图
    [self.view addSubview:self.webView];
    
//    创建请求
    NSString *path = [[NSBundle mainBundle] pathForResource:@"www/index" ofType:@"html"];
    NSURL *url = [NSURL fileURLWithPath: path];
    NSURLRequest *request = [NSURLRequest requestWithURL: url];
//    加载请求
    [self.webView loadRequest:request];
    
}



- (BOOL)webView:(UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType
{
    NSString *path = request.URL.absoluteString;
    NSLog(@"%@", path);
//    'hehe://takePicture';
    NSRange range = [path rangeOfString:@"hehe://"];
   
    if (range.location != NSNotFound) {
//        得到方法名
        NSString *method = [path substringFromIndex:range.location + range.length];
//        将字符串转为方法
        SEL sel = NSSelectorFromString(method);
//        调用方法
        [self performSelector:sel];
        
        return NO;
    
    }
    
    return YES;
}

#pragma mark - 获取照片
- (void)takePicture
{
    UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"选择照片" message:@"" preferredStyle:(UIAlertControllerStyleAlert)];
    
    [alert addAction:[UIAlertAction actionWithTitle:@"从相册选择hehe" style:UIAlertActionStyleDefault handler:^(UIAlertAction *action) {
        ImagePicViewController *ipic = [[ImagePicViewController alloc]initWithButtonIndex:0];
        ipic.customDelegate = self;
        [self presentViewController:ipic animated:YES completion:nil];
    }]];
    
    [alert addAction:[UIAlertAction actionWithTitle:@"使用照相机xixi" style:UIAlertActionStyleDefault handler:^(UIAlertAction *action) {
        ImagePicViewController *ipic = [[ImagePicViewController alloc]initWithButtonIndex:1];
        ipic.customDelegate = self;
        [self presentViewController:ipic animated:YES completion:nil];
    }]];
    
    [alert addAction:[UIAlertAction actionWithTitle:@"取消dsadfsfs" style:UIAlertActionStyleDefault handler:^(UIAlertAction *action) {
        
    }]];
    
    [self presentViewController:alert animated:YES completion:nil];

}

- (void)setImage:(UIImage *)image imageName:(NSString *)imageName
{
    NSLog(@"name : %@", NSStringFromCGSize(image.size));
    
    NSData *data = UIImageJPEGRepresentation(image, 1.0);
    
    
    NSString *path = NSTemporaryDirectory();
    path = [path stringByAppendingFormat:@"/%@", imageName];
    [data writeToFile:path atomically:YES];
    path = [[NSURL URLWithString:path] absoluteString];
    
//    NSString *method = [NSString stringWithFormat:@"var img = document.getElementById(\"img\"); img.src = '%@';", path];
    NSString *method = [NSString stringWithFormat:@"nativeCallback('takePicture', {status: 'success', value: '%@'})", path];
    NSLog(@"%@", method);
    //向webview窗口注入js代码
    [self.webView stringByEvaluatingJavaScriptFromString:method];
}


#pragma mark - 扫描二维码
- (void)getRQCode
{
    RQCodeViewController *rqCodeVC = [[RQCodeViewController alloc] init];
    rqCodeVC.myBlock = ^(NSString *info){
        NSString *logInfo = [NSString stringWithFormat:@"nativeCallback('getRQCode', {status: 'success', value: '%@'})", info];
        NSLog(@"%@", logInfo);

        [self.webView stringByEvaluatingJavaScriptFromString:logInfo];
        
    };
    [self presentViewController:rqCodeVC animated:YES completion:nil];
}







@end
