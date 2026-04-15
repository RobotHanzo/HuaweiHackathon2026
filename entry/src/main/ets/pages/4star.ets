// ============================================================
// 頁面 3: UserProfile — 已連接用戶資料頁
// 檔案: entry/src/main/ets/pages/UserProfile.ets
// ============================================================

@Entry
@Component
struct UserProfile {
  @State userName: string = 'Chou Yu Fan'
  @State userTitle: string = 'Software Developer'
  @State isStarred: boolean = false

  build() {
    Column() {
      // --- 頭像 ---
      Column() {
        Text('👤')
          .fontSize(28)
      }
      .width(60)
      .height(60)
      .borderRadius(30)
      .backgroundColor('#BBBBBB')
      .justifyContent(FlexAlign.Center)
      .alignItems(HorizontalAlign.Center)
      .margin({ top: 20 })

      // --- 名字 ---
      Text(this.userName)
        .fontSize(15)
        .fontWeight(FontWeight.Bold)
        .fontColor('#FFFFFF')
        .margin({ top: 8 })

      // --- 職稱 ---
      Text(this.userTitle)
        .fontSize(12)
        .fontColor('#AAAAAA')
        .margin({ top: 2 })

      // --- Star 按鈕 ---
      Button({ type: ButtonType.Normal, stateEffect: true }) {
        Image(this.isStarred ? $r('app.media.Star2') : $r('app.media.Star1'))
          .width(20)
          .height(20)
          .objectFit(ImageFit.Contain)
      }
      .width('65%')
      .height(34)
      .backgroundColor(this.isStarred ? '#333333' : '#E8E8E8')
      .borderRadius(17)
      .margin({ top: 10 })
      .onClick(() => {
        this.isStarred = !this.isStarred
        console.info('Star toggled: ' + this.isStarred)
      })

      // --- Voice memo 按鈕 ---
      Button({ type: ButtonType.Normal, stateEffect: true }) {
        Image($r('app.media.mic'))
          .width(20)
          .height(20)
          .objectFit(ImageFit.Contain)
      }
      .width('65%')
      .height(34)
      .backgroundColor('#E8E8E8')
      .borderRadius(17)
      .margin({ top: 6 })
      .onClick(() => {
        // TODO: 開啟語音備忘錄
        console.info('Voice memo clicked')
      })

      // --- Disconnect 按鈕 ---
      Button('Disconnect')
        .width('65%')
        .height(34)
        .fontSize(12)
        .fontWeight(FontWeight.Medium)
        .fontColor('#FFFFFF')
        .backgroundColor('#444444')
        .borderRadius(17)
        .margin({ top: 6 })
        .onClick(() => {
          // TODO: 斷開連接
          console.info('Disconnect clicked')
        })
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#1A1A1A')
    .justifyContent(FlexAlign.Start)
    .alignItems(HorizontalAlign.Center)
  }
}
