#import <UIKit/UIKit.h>

@protocol ImagePicViewControllerDelegate <NSObject>

- (void)setImage:(UIImage *)image imageName:(NSString *)imageName;

@end

@interface ImagePicViewController : UIImagePickerController

@property (weak, nonatomic) id<ImagePicViewControllerDelegate> customDelegate;

/**
 *带参的初始化方法
 *根据UIActionSheet按钮的buttonIndex选择相册或者相机
 *0:相册
 *1:相机
 **/
- (id)initWithButtonIndex:(NSInteger)buttonIndex;



@end
