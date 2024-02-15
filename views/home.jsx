const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div className="hero-image">                
                    {/* <a href="/guestbook">
                        <button className="btn btn-primary">Guestbook Page</button>
                    </a> */}
                </div>
            </main>
        </Def>
    )
}

module.exports = home