import { router } from '@kit.ArkUI'

@Entry
@Component
struct PersonalProfile {
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

      // 頭像（可點擊 → 翻至 QR 頁）
      Stack() {
        Circle({ width: 72, height: 72 })
          .fill('#FFFFFF')
        Image($r('app.media.ic_person'))
          .width(44)
          .height(44)
          .objectFit(ImageFit.Cover)
          .borderRadius(22)
      }
      .margin({ top: 8, bottom: 16 })
      .onClick(() => {
        router.pushUrl({ url: 'pages/6PersonalQR' })
      })

      // 姓名
      Text('Chou Yu Fan')
        .fontSize(18)
        .fontWeight(FontWeight.Bold)
        .fontColor('#FFFFFF')
        .margin({ bottom: 4 })

      // 職稱
      Text('Software engineer')
        .fontSize(12)
        .fontColor('#E0E0E0')
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#8A8A8A')
    .alignItems(HorizontalAlign.Center)
    .justifyContent(FlexAlign.Start)
  }
}