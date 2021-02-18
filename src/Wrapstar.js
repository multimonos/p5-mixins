// const stack = p5Instance => fn => ( obj = undefined ) => {
const stack = p5Instance => fn => {
    p5Instance.push()
    // fn( obj )
    fn()
    p5Instance.pop()
    return p5Instance
}

// const shape = p5Instance => fn => ( obj = undefined ) => ( begin = undefined ) => ( end = undefined ) => {
//     begin ? p5Instance.beginShape( begin ) : p5Instance.beginShape()
//     fn()
//     end ? p5Instance.endShape( end ) : p5Instance.endShape()
//     return p5Instance
// }

export default p => {
    // p.stackwith = stackwith( p )
    p.stack = stack( p )
    // p.shapewith = shapewith( p )
    // p.shape = shape( p )
}
