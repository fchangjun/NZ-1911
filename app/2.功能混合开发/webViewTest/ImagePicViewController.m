#import "ImagePicViewController.h"
#import <AssetsLibrary/AssetsLibrary.h>

@interface ImagePicViewController ()<UINavigationControllerDelegate,UIImagePickerControllerDelegate>


@end

@implementation ImagePicViewController

- (id)initWithButtonIndex:(NSInteger)buttonIndex
{
    self = [super init];
    if (self)
    {
        self.delegate = self;
        //选择照片
        if (0 == buttonIndex)
        {
            [self setSourceType:(UIImagePickerControllerSourceTypePhotoLibrary)];
        }
        //照相机
        else if (1 == buttonIndex)
        {
            [self setSourceType:(UIImagePickerControllerSourceTypeCamera)];
        }
    }
    return self;
}

#pragma mark - UIImagePickerController协议方法
- (void)imagePickerController:(UIImagePickerController *)picker didFinishPickingMediaWithInfo:(NSDictionary *)info
{
    
    NSURL *imageURL = [info valueForKey:UIImagePickerControllerReferenceURL];    //获取选中照片
    UIImage *img = [info objectForKey:UIImagePickerControllerOriginalImage];
 
    ALAssetsLibraryAssetForURLResultBlock resultblock = ^(ALAsset *myasset)
    {
        ALAssetRepresentation *representation = [myasset defaultRepresentation];
        NSString *fileName = [representation filename];
        //回掉
        if(nil == fileName)
        {
            NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
            // 设置时间格式
            formatter.dateFormat = @"yyyyMMddHHmmss";
            NSString *str = [formatter stringFromDate:[NSDate date]];
            fileName = [NSString stringWithFormat:@"%@.PNG", str];
        }
        [self.customDelegate setImage:img imageName:fileName];
    };
    
    ALAssetsLibrary* assetslibrary = [[ALAssetsLibrary alloc] init];
    [assetslibrary assetForURL:imageURL
                   resultBlock:resultblock
                  failureBlock:nil];

    [self dismissViewControllerAnimated:YES completion:nil];
}

- (void)viewDidLoad {
    [super viewDidLoad];
        // Do any additional setup after loading the view.
}


@end
