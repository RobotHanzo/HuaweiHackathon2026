// Cufflink — "Julia is nearby" 通知頁面
// 對應 Figma 設計中的「打招呼提醒二選一」

@Entry
@Component
struct CufflinkNotification {
  @State userName: string = 'Julia'

  build() {
    Column() {
      // --- 頭像 ---
      Column() {
        Image($r('app.media.avatar_placeholder'))
          .width(56)
          .height(56)
          .borderRadius(28)
          .objectFit(ImageFit.Cover)
          .backgroundColor('#BBBBBB')
      }
      .margin({ top: 24 })

      // --- App 名稱 ---
      Text('Cufflink')
        .fontSize(16)
        .fontWeight(FontWeight.Bold)
        .fontColor('#FFFFFF')
        .margin({ top: 10 })

      // --- 通知訊息 ---
      Text(`${this.userName} is nearby.\nSend a wave?`)
        .fontSize(13)
        .fontColor('#CCCCCC')
        .textAlign(TextAlign.Center)
        .lineHeight(18)
        .margin({ top: 4 })

      // --- Wave 按鈕 ---
      Button('Wave')
        .width('70%')
        .height(40)
        .fontSize(14)
        .fontWeight(FontWeight.Medium)
        .fontColor('#1A1A1A')
        .backgroundColor('#E8E8E8')
        .borderRadius(20)
        .margin({ top: 12 })
        .onClick(() => {
          // TODO: 處理 Wave 邏輯（發送打招呼）
          console.info('Wave clicked')
        })

      // --- Ignore 按鈕 ---
      Button('Ignore')
        .width('70%')
        .height(40)
        .fontSize(14)
        .fontWeight(FontWeight.Medium)
        .fontColor('#FFFFFF')
        .backgroundColor('#444444')
        .borderRadius(20)
        .margin({ top: 8 })
        .onClick(() => {
          // TODO: 處理 Ignore 邏輯（忽略通知）
          console.info('Ignore clicked')
        })
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#1A1A1A')
    .justifyContent(FlexAlign.Start)
    .alignItems(HorizontalAlign.Center)
  }
}
