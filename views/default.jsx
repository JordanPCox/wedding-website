const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Wedding Website</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <main className="container">
                <body>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/guestbook">Guestbook</a>
                            </li>
                            <li>
                                <a href="/guestbook/new">Add Post</a>
                            </li>
                        </ul>
                    </nav>
                    {html.children}
                    <footer>
                        This is the sticky footer
                    </footer>
                </body>
            </main>
        </html>
    )
}

module.exports = Def