const React = require('react')
const Def = require('../default')

function index(data) {
    let guestbookFormatted = data.guestbook.map((guestbook) => {
        return (
            <div>
                <h2>{guestbook.name}</h2>
                <img src={guestbook.pic} alt={guestbook.name}/>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>GUESTBOOK</h1>
                {guestbookFormatted}
            </main>
        </Def>
    )
}

module.exports = index