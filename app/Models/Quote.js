export class Quote {
  constructor(data) {
    this.id = data._id
    this.tags = data.tags
    this.content = data.content
    this.author = data.author
    this.authorSlug = data.authorSlug
    this.length = data.length
  }

  get Template() {
    return `
    <h4 class="myQuote">${this.content}</h4>
    <div class="hide">
      <h4>${this.author}</h4>
    </div>
    `
  }


}