'use strict'

// import { BsddSearch } from '../dist/bsdd-search'

function callback(data) {
  console.log(data)
  alert(JSON.stringify(data, null, 2))
}

const config = {
  defaultDomains: [
    {
      value: 'https://identifier.buildingsmart.org/uri/digibase/volkerwesselsbv-0.1',
      label: 'VolkerWessels Bouw & Vastgoed',
    },
  ],
}

const root = document.getElementById('root')

BsddSearch.insertBsddSearch(root, callback, config)

// const e = React.createElement

// const domContainer = document.getElementById('root')
// console.log(domContainer)
// const root = ReactDOM.createRoot(domContainer)
// // root.render(BsddSearch)
// // root.render(React.createElement(BsddSearch.BsddSearch))

// // root.render(BsddSearch.BsddSearch(config, callback))
// root.render(React.createElement('div', null, BsddSearch.BsddSearch))

// // const e = React.createElement

// // Display a "Like" <button>
// root.render(React.createElement('button', { onClick: () => BsddSearch.BsddSearch(config, callback) }, 'Like'))

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { liked: false }
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked comment number ' + this.props.commentID
//     }

//     return e('button', { onClick: () => this.setState({ liked: true }) }, 'Like')
//   }
// }

// // Find all DOM containers, and render Like buttons into them.
// document.querySelectorAll('.like_button_container').forEach((domContainer) => {
//   // Read the comment ID from a data-* attribute.
//   const commentID = parseInt(domContainer.dataset.commentid, 10)
//   const root = ReactDOM.createRoot(domContainer)
//   root.render(e(BsddSearch, { commentID: commentID }))
// })

// <BsddSearch callback={callback} config={config} />
