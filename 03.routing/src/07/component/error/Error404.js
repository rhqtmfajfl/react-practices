import React from 'react';
import SiteLayout from "../../layout/SiteLayout";

export default function Gallery() {
    // window.location.href="/";  //이렇게 하면 메인으로 간다.
    return (
        <SiteLayout>
            <div>
                <h2 style={{
                    lineHeight: '200px',
                    textAlign: 'center'
                }}>Whoops - 404 Not Found</h2>
            </div>
        </SiteLayout>
    );
}