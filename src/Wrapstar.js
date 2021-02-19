const stack = p5i => fn => {
    p5i.push()
    fn()
    p5i.pop()
    return p5i
}

const shape = p5i => ( fn, begin = undefined, end = undefined ) => {
    begin ? p5i.beginShape( begin ) : p5i.beginShape()
    fn()
    end ? p5i.endShape( end ) : p5i.endShape()
    return p5i
}

export default p => {
    p.stack = stack( p )
    p.shape = shape( p )
    // p.shapewith = shapewith( p )
    // p.stackwith = stackwith( p )
}
