#import "RQCodeViewController.h"
#import <AVFoundation/AVFoundation.h>


@interface RQCodeViewController ()<AVCaptureMetadataOutputObjectsDelegate>

@property (nonatomic, strong)AVCaptureSession *session;

@end

@implementation RQCodeViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    AVCaptureDevice *device = [AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo];
    AVCaptureDeviceInput *input = [AVCaptureDeviceInput deviceInputWithDevice:device error:nil];
    //会话
    AVCaptureSession *session = [[AVCaptureSession alloc] init];
    [session addInput:input];

    AVCaptureMetadataOutput *output = [[AVCaptureMetadataOutput alloc] init];
    
    [output setMetadataObjectsDelegate:self queue:dispatch_get_main_queue()];

    [session addOutput:output];

    [output setMetadataObjectTypes:@[AVMetadataObjectTypeQRCode]];

    AVCaptureVideoPreviewLayer *previewLayer = [AVCaptureVideoPreviewLayer layerWithSession:session];

    previewLayer.frame = self.view.bounds;

    [self.view.layer addSublayer:previewLayer];
    //开始扫描
    [session startRunning];
    self.session = session;
}

- (void)captureOutput:(AVCaptureOutput *)captureOutput didOutputMetadataObjects:(NSArray *)metadataObjects fromConnection:(AVCaptureConnection *)connection
{
    NSLog(@"得到结果");
    [self.session stopRunning];
    if (metadataObjects.count > 0) {
        AVMetadataMachineReadableCodeObject *obj = metadataObjects[0];
        NSLog(@"%@", obj.stringValue);
        //obj.stringValue 得到二维码信息
        self.myBlock(obj.stringValue);
        [self dismissViewControllerAnimated:YES completion:nil];
    }
}




@end
