#import "ViewController.h"
#import <WebKit/WebKit.h>

@interface ViewController ()
@property(strong, nonatomic) UIWebView *webview;
@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    //    获得手机的屏幕大小
    CGRect rect = CGRectMake(0, 0, self.view.frame.size.width, self.view.frame.size.height);
    
    //    创建能够打开网页的窗口在手机上是 webview
    self.webview = [[UIWebView alloc] initWithFrame:rect];
    
    //   关闭弹簧效果
    self.webview.scrollView.bounces = NO;
    
    
    //     写请求,加载服务器请求
        NSString *path = @"http://ustbhuangyi.com/music/#/recommend";
        NSURL *url = [NSURL URLWithString: path];
        NSURLRequest *request = [NSURLRequest requestWithURL:url];
    
    
    
    //    写请求，加载本地文件
//    NSString *path = [[NSBundle mainBundle] pathForResource:@"www/index1.html" ofType:nil];
//    NSURL *url = [NSURL fileURLWithPath:path];
//    NSURLRequest *request = [NSURLRequest requestWithURL:url];

    
    //  窗口加载请求
    [self.webview loadRequest:request];
    //
    
    //    在手机程序上显示窗口
    [self.view addSubview:self.webview];
    
}
@end
