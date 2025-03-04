import { css } from "styled-system/css";
import { Link, Outlet } from "@remix-run/react";
import { flex } from "styled-system/patterns";

const App = () => {
    return (
        <div className={flex({
            flexDirection: "column",
            height: "100vh",
        })}>
            {/* ヘッダー */}
            <header className={css({
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
                backgroundColor: "#333",
                color: "#fff",
            })}>
                <div>Logo</div>
                <div>
                    <Link to="/">Home</Link> | <Link to="/about">About</Link>
                </div>
            </header>

            <div className={flex({ flex: 1 })}>
                {/* サイドナビ */}
                <div className={css({
                    width: "200px",
                    display: "flex",
                    flexDirection: "column",
                    padding: "1rem",
                    backgroundColor: "#f4f4f4",
                })}>
                    <Link to="/users">Users</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                {/* メインコンテンツ部分 */}
                <main className={css({
                    padding: "32px",
                })}>
                    {/* ルートレンダリング部分 */}
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default App;