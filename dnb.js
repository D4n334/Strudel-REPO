register('rlp', (x,pat) => {return pat.lpf(pure(x).mul(12).pow(4))})
setGainCurve(x => Math.pow(x,2))
setCpm(170/4)

$drums: stack(
  s("bd:1") .beat("0,7?,10",16).duck("3:4:5"),
  s("sd:2") .beat("4,12",16),
  s("hh:4!8")
) 
  //.rib(0,1/4)
  .orbit(2)._scope()
$bass: s("supersaw!8")
  .note("<c# f d# [g# a#2]>/2".sub("[12 0]".fast(2))).orbit(3)
  .rlp(slider(0.648)).lpenv("2")._scope()
$riser: s("pulse!16").decay(.1).fm(time).fmh(time).orbit(5)

$vox: s("numbers").scrub(berlin.fast(2).seg(3)).orbit(4).n("< 7 [6] >")
      .rib(13,2)
      .delay(.6)
      .room(1)
      .roomsize(6)
      .dry(0)
      .delayspeed(rand)
