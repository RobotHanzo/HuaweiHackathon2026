// ============================================================
// 頁面 1: SearchingUsers — 搜尋附近用戶
// 檔案: entry/src/main/ets/pages/SearchingUsers.ets
// ============================================================

@Entry
@Component
struct SearchingUsers {
  @State dots: string = '...'

  build() {
    Column() {
      // --- 搖手圖示 ---
      Column() {
        Text('👋')
          .fontSize(48)
      }
      .width(80)
      .height(80)
      .borderRadius(40)
      .backgroundColor('#1565C0')
      .justifyContent(FlexAlign.Center)
      .alignItems(HorizontalAlign.Center)
      .margin({ top: 30 })

      // --- 搜尋文字 ---
      Text('Searching users...')
        .fontSize(14)
        .fontWeight(FontWeight.Bold)
        .fontColor('#FFFFFF')
        .margin({ top: 14 })

      // --- 提示文字 ---
      Text('Move closer to complete\nTouch to Connect.')
        .fontSize(11)
        .fontColor('#AAAAAA')
        .textAlign(TextAlign.Center)
        .lineHeight(16)
        .margin({ top: 6 })
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#1A1A1A')
    .justifyContent(FlexAlign.Start)
    .alignItems(HorizontalAlign.Center)
  }
}
