const React = require('react');
const Def = require('../default');

function Show(data) {
    return (
        <Def>
            <main>
                <div className="col-custom-6 pt-4 pb-4">
                    <h2 className="text-custom-center">{data.guestbook.name}</h2>
                    <p className="text-custom-center">{data.guestbook.location}</p>
                    <p className="text-custom-center">How we met: {data.guestbook.story}</p>
                    <img src={data.guestbook.pic} alt={data.guestbook.name} className="img-custom-fluid" />
                    <p className="text-custom-center">Advice: {data.guestbook.advice}</p>
                </div>
                <div>
                    <a href={`/guestbook/${data.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>
                    <form method="POST" action={`/guestbook/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </div>
            </main>
        </Def>
    );
}

module.exports = Show;
