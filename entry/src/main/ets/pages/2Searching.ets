import { router } from '@kit.ArkUI'

@Entry
@Component
struct NfcSearching {
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

      // 手錶 NFC 圖示圓形
      Column() {
        Image($r('app.media.avatar_placeholder'))
          .width(64)
          .height(64)
          .objectFit(ImageFit.Contain)
          .backgroundColor('#FFFFFF')
          .borderRadius(32)
      }
      .width(100)
      .height(100)
      .borderRadius(50)
      .backgroundColor('#1565C0')
      .justifyContent(FlexAlign.Center)
      .alignItems(HorizontalAlign.Center)
      .margin({ top: 8, bottom: 16 })

      // 主標題
      Text('Searching users...')
        .fontSize(15)
        .fontWeight(FontWeight.Bold)
        .fontColor('#FFFFFF')
        .margin({ bottom: 8 })

      // 副標題
      Text('Move closer to complete\nTouch to Connect.')
        .fontSize(12)
        .fontColor('#AAAAAA')
        .textAlign(TextAlign.Center)
        .lineHeight(18)
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#1A1A1A')
    .alignItems(HorizontalAlign.Center)
    .justifyContent(FlexAlign.Start)
  }
}
