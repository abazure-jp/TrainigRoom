# mapにgpxをプロットしたい
 - グーグルマップ上にgpxのデータをプロットする

## ヒートマップレイヤ
    https://developers.google.com/maps/documentation/javascript/heatmaplayer?hl=ja

## 例
    https://liginc.co.jp/web/service/google/98165
    https://zxcvbnmnbvcxz.com/11-googlemap-designs/

  これなら血脈が目立つだろうか？
    http://www.diehlgroup.com/

## ひとまずのゴール
としてドット表示。
まずは完全に平面的な情報をリマップする感じに。

実際には単にドット表示するというアプローチでは、うまく表示できないんじゃないかと思っている。
そうするとデザインが必要で、まあ例えばヒートマップみたいな手法になるのか、別のやりかたなのかは分からないけれど、ドット表示がいいなあというのは変わらない。のでまずはその辺っすね。

べつにドットデザインに拘らなくても良いのでは…?
いかに美しく脈の隅々にまで血を通わせることが出来るのかどうか、それが大事なんだし。

## 血をどのように実装するか
googlemapでは、歩行可能な部分は白くなっている？
であれば座標の色をとって白ならそのまま、それ以外なら黒にするような処理をして…とか。

-> まだ確認していないけど

[要確認] gpxとかで軌跡をプロットすることは簡単。問題は道路の幅をどのように表現するか。googlemapapi側でそういうのってカバーしてるんだろうか？

## おぼえがき
べつにjsで完結させる必要は無いわけで。
->法的なあれであんまり無茶しないほうがいい…。


-> googlemapapiではより柔軟に対応できる。

https://developers.google.com/maps/documentation/javascript/style-reference?hl=ja

とりあえず公式リファレンスとにらめっこ

rubyかpythonか…。
