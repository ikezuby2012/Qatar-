import React from 'react';

const Authlayout = ({ children }) => {
    return (
        <main className="auth">
            <div className="auth-padding">
                <div className="auth-bg-img" >
                    <div className="auth-text">
                        <h2>
                            Qatar invest
                        </h2>
                        <h4>build your future with investment</h4>
                        <p>
                            invest in an industry leader, professional and reliable company, we provide you with the
                            most necessary features to make your experience better
                        </p>
                    </div>
                    <div className="auth-copyright">
                        <p>copyright Qatar invest &copy; 2019-{new Date().getFullYear()}</p>
                    </div>
                </div>
                <div className="auth-box">
                    {children}
                </div>
            </div>
        </main>
    );
}

export default Authlayout;
