import { router } from '@kit.ArkUI'

@Entry
@Component
struct PersonalQR {
  @State currentTime: string = ''
  private timeInterval: number = -1

  aboutToAppear() {
    this.updateTime()
    this.timeInterval = setInterval(() => {
      this.updateTime()
    }, 1000)
  }

  aboutToDisappear() {
    clearInterval(this.timeInterval)
  }

  updateTime() {
    const now = new Date()
    const h = now.getHours().toString().padStart(2, '0')
    const m = now.getMinutes().toString().padStart(2, '0')
    this.currentTime = `${h}:${m}`
  }

  build() {
    Column() {
      // 時間（右上）
      Text(this.currentTime)
        .fontSize(14)
        .fontColor('#FFFFFF')
        .width('100%')
        .textAlign(TextAlign.End)
        .padding({ right: 14, top: 12 })

      // QR Code 白色圓角框
      Column() {
        Image($r('app.media.qr_code'))
          .width(96)
          .height(96)
          .objectFit(ImageFit.Contain)
      }
      .width(116)
      .height(116)
      .backgroundColor('#FFFFFF')
      .borderRadius(16)
      .justifyContent(FlexAlign.Center)
      .alignItems(HorizontalAlign.Center)
      .margin({ top: 10, bottom: 14 })

      // 姓名
      Text('Chou Yu Fan')
        .fontSize(16)
        .fontWeight(FontWeight.Bold)
        .fontColor('#FFFFFF')
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#8A8A8A')
    .alignItems(HorizontalAlign.Center)
    .justifyContent(FlexAlign.Start)
    .gesture(
      SwipeGesture({ direction: SwipeDirection.Horizontal })
        .onAction((event: SwipeGestureEvent) => {
          if (event.angle < 45 && event.angle > -45) {
            router.back()
          }
        })
    )
  }
}
