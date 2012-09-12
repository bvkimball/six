var Relatives = {

  first()  this.children[ 0 ],
  last()   this.children[ this.children.length -1 ],

  next() {
    var siblings = this.parent.children
    return siblings[siblings.indexOf(this) + 1]
  },

  prev() {
    var siblings = this.parent.children
    return siblings[siblings.indexOf(this) - 1]
  },

  deepest() {
    var deepest = []

    this.children.forEach(child => {
      !child.children.length ? deepest.push(child)
        : child.deepest.forEach( child => deepest.push(child))
    })

    return deepest
  }

}

exports.Relatives = Relatives