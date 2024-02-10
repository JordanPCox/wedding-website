const React = require('react')
const Def = require('../default')

function index(data) {
    let guestbookFormatted = data.guestbook.map((guestbook) => {
        return (
            <div className="col-sm-6">
                <h2>{guestbook.name}</h2>
                <p className="text-left">
                    {guestbook.location}
                </p>
                <p className="text-left">
                    How we met: {guestbook.story}
                </p>
                <img src={guestbook.pic} alt={guestbook.name}/>
                <p className="text-left">
                    Advice: {guestbook.advice}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>GUESTBOOK</h1>
                <div className="row guestbook-index">
                    {guestbookFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index