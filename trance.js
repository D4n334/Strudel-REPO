setCpm(150/4)

$: s("bd:2!4")

$ : n("<3@3 4 5@3 6>*2".add(-14, -21)).scale('g:minor')
    .s("supersaw")
    .seg(16)
    slider(1).lpenv(2)

$ : n("0@2 <-7[-5 -2]>@3  <1 2 3 1 5 4 3 2>@3".add(7))
    .add("<5 4 0<2 -2>>")._pianoroll()
    .scale('g:minor')
    .s("supersaw")
    .delay(.7).pan(rand)
    .fm(.5).fmwave("brown")
    slider(1).lpenv(2)

$: s("pulse!16").dec(.1).fm(time).octave(4)

$: s("jt:6").note("e2".add("<0 7 12 0>*8")).scrub(rand.seg(16)).rib(46,2)
    .delay(.8)  
    .octave(5)
    ._punchcard()
