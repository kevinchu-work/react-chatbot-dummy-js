import React from 'react';

export const ProjectConfig_Context = React.createContext({
    // configration
    interfaceLanguage: 'en',
    is_demo: true,

    toggleTheme: () => {},
});
