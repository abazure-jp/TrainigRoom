# mapにgpxをプロットしたい
 - グーグルマップ上にgpxのデータをプロットする
  - まあ出来不出来はともかくプロットするだけしてみるか…。

## ヒートマップレイヤ
    https://developers.google.com/maps/documentation/javascript/heatmaplayer?hl=ja

## 交通機関レイヤ
    https://developers.google.com/maps/documentation/javascript/trafficlayer?hl=ja

## Google Map Roads API
    https://developers.google.com/maps/documentation/roads/intro?hl=ja

>このサービスは、一連の GPS 座標と最もフィットする道路の形状を返します。 
経路に沿って収集した最大 100 個までの GPS 地点を受け取り、車両が走行していた可能性が最も高い地点にスナップした一連のデータを返します。
    
 よさそう。GPSで観測したノイズまみれの座標情報の連続から、もっともらしい経路情報を出してくれる。
 これは採用っぽい。
 redis,js,pythonで実装することになりそう。サーバーは何にするか決めてないです。

## 例
    https://liginc.co.jp/web/service/google/98165
    https://zxcvbnmnbvcxz.com/11-googlemap-designs/

  これなら血脈が目立つだろうか？
    http://www.diehlgroup.com/

## 血をどのように実装するか
[要確認] gpxとかで軌跡をプロットすることは簡単。問題は道路の幅をどのように表現するか。googlemapapi側でそういうのってカバーしてるんだろうか？

## おぼえがき
べつにjsで完結させる必要は無いわけで。
->法的なあれであんまり無茶しないほうがいい…。
