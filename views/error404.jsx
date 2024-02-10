const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <div className="error-img">
                    <img src="http://placekitten.com/300/300" />
                    <p>Sorry! It seems we haven't been here yet.</p>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404