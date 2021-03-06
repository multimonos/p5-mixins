import p5 from "p5"

export { VectorDrawing as default }

const VectorDrawing = p => {
    p.vrect = ( a, b ) => p.rect( a.x, a.y, b.x - a.x, b.y - a.y )
    p.vcircle = size => vec => p.circle( vec.x, vec.y, size )
    p.vline = ( a, b ) => p.line( a.x, a.y, b.x, b.y )
    p.vtranslate = vec => p.translate( vec.x, vec.y, vec.z )
    p.vvertex = ( vec, u, v ) => p.vertex( vec.x, vec.y, vec.z, u, v )
}