#import <UIKit/UIKit.h>

typedef void (^dispatch_my_block)(NSString *info);

@interface RQCodeViewController : UIViewController

@property (nonatomic, copy)dispatch_my_block myBlock;

@end
