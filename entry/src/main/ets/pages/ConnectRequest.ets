// ============================================================
// 頁面 2: ConnectRequest — 收到連接請求
// 檔案: entry/src/main/ets/pages/ConnectRequest.ets
// ============================================================

@Entry
@Component
struct ConnectRequest {
  @State userName: string = 'Julia'

  build() {
    Column() {
      // --- 頭像 ---
      Column() {
        Text('👤')
          .fontSize(24)
      }
      .width(48)
      .height(48)
      .borderRadius(24)
      .backgroundColor('#BBBBBB')
      .justifyContent(FlexAlign.Center)
      .alignItems(HorizontalAlign.Center)
      .margin({ top: 16 })

      // --- App 名稱 + 通知 ---
      Text('Cufflink')
        .fontSize(13)
        .fontWeight(FontWeight.Bold)
        .fontColor('#FFFFFF')
        .margin({ top: 8 })

      Text(`Hi, I'm ${this.userName}.\nTap to connect.`)
        .fontSize(12)
        .fontColor('#CCCCCC')
        .textAlign(TextAlign.Center)
        .lineHeight(16)
        .margin({ top: 4 })

      // --- Connect 按鈕 ---
      Button('Connect')
        .width('65%')
        .height(36)
        .fontSize(13)
        .fontWeight(FontWeight.Medium)
        .fontColor('#1A1A1A')
        .backgroundColor('#E8E8E8')
        .borderRadius(18)
        .margin({ top: 12 })
        .onClick(() => {
          // TODO: 處理連接邏輯
          console.info('Connect clicked')
        })

      // --- Cancel 按鈕 ---
      Button('Cancel')
        .width('65%')
        .height(36)
        .fontSize(13)
        .fontWeight(FontWeight.Medium)
        .fontColor('#FFFFFF')
        .backgroundColor('#444444')
        .borderRadius(18)
        .margin({ top: 6 })
        .onClick(() => {
          // TODO: 處理取消邏輯
          console.info('Cancel clicked')
        })
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#1A1A1A')
    .justifyContent(FlexAlign.Start)
    .alignItems(HorizontalAlign.Center)
  }
}
