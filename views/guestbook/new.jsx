const React = require('react')
const Def = require('../default')

// Form to submit new guestbook post
function new_form() {
    return (
        <Def>
            <main className="container">
                <h1>How do you know the happy couple?</h1>
                <form className="needs-validation" method="POST" action="/guestbook" noValidate>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Guest Name</label>
                        <input type="text" className="form-control" id="name" name="name" required />
                        <div className="invalid-feedback">
                            Please provide a valid name.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Where did we meet?</label>
                        <input type="text" className="form-control" id="location" name="location" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="story" className="form-label">How did we meet?</label>
                        <input type="text" className="form-control" id="story" name="story" required />
                        <div className="invalid-feedback">
                            Please provide a story.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pic" className="form-label">Share a photo link!</label>
                        <input type="url" className="form-control" id="pic" name="pic" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="advice" className="form-label">Any marriage advice?</label>
                        <input type="text" className="form-control" id="advice" name="advice" />
                    </div>
                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form
