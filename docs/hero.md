# ヒーロー（86 の運転席）の仕組み

## 構造
```
.hero            高さ 220svh。固定される間にスクロールを「アクセル」として使う
└ .stage         position: sticky; 100svh。--p（0〜1）はここにだけ書く
  ├ canvas#scene  three.js の夜の道路（src/scene.js、idle 時に動的 import）
  ├ .frame        ルーフと A ピラー（CSS）
  ├ #cockpit      運転席（src/cockpit.svg を JS で流し込む）
  └ .hero-inner   見出し・説明・ボタン。--p が上がると上へ流れて消える
```
ヒーローより下は `canvas#code`（src/code.js）が、`--p > 0.8` でふわっと出る。

## 動きの流れ
- `setupScroll()`（src/main.js）が scroll を rAF で間引いて、`--p`・ギア・速度・回転数（`--tach`）を更新する。
- `scene.js` は `scrollY` から自分で `p` を計算してイージングする（`--p` は読まない）。速度・視野・bloom・太陽の大きさが `p` で変わる。
- マウスで、ハンドルが回り（`--steer`）、頭が少し振れる。

## 触る場所
| やりたいこと | 場所 |
|---|---|
| 明るさ・紫の濃さ | `scene.js` の `background` / `FogExp2` / `UnrealBloomPass` / 太陽の `CircleGeometry` |
| 加速の強さ | `scene.js` の `SPEED * (1 + p * 9)` |
| ヒーローの長さ | `style.css` の `.hero { height: 220svh }` |
| ギアの段数・速度の上限 | `setupScroll()` の `p * 5` / `p * 220` |
| 運転席の形 | `src/cockpit.svg`（これが元データ。手で編集する） |
| コード背景の文字 | `src/code.js` の `CODE` |

## 守ること
- `--p` は `.stage` にだけ書く。`:root` に書くと、スクロールのたびにページ全体のスタイルを再計算する。
- **フレームレートの上限（`performance.now()` の差でスキップ）を入れない**。確認用の headless で全フレームがスキップされて描画されなくなった。
- `.hero` の祖先に `overflow: hidden` を付けない（sticky が効かなくなる）。クリップは `.stage` 自身に付ける。
- `prefers-reduced-motion` では `.hero` を `height: auto` にして固定をやめる。このとき `hero.offsetHeight - innerHeight` が 0 になるので、`p` は 0 のままにする（`travel > 0` の判定を消さない）。
- 3D は動的 import。読み込み前・WebGL 不可・データ節約モードでは、`.stage` の背景グラデーションだけが見える。
- 画面の高さが 700px 未満のときは説明文を隠す（`@media (max-height: 699px)`）。見出しは `min(5.2vw, 8svh)`。

## 確認のしかた
build してから `~/.claude/skills/web-check/scripts/scroll-shot.sh` を使う（詳細は web-check skill）。
```bash
bun run build
SHOT=~/.claude/skills/web-check/scripts/scroll-shot.sh
"$SHOT" -g -y 0,600,1500 dist                       # PC
"$SHOT" -g -w 390x844 -y 0,500 dist                 # スマホ幅
"$SHOT" -g -r -w 390x844 -y 600 dist                # 動きを減らす設定
```
実機の滑らかさと Zen、スクロール後の浮き出し（IntersectionObserver）は headless では確かめられない。
