require("./index.css");
var $ltMAx$reactjsxruntime = require("react/jsx-runtime");
var $ltMAx$react = require("react");
var $ltMAx$reactdom = require("react-dom");
var $ltMAx$reactrouterdom = require("react-router-dom");
var $ltMAx$reacticonsfa = require("react-icons/fa");
require("react-hook-form");
require("prop-types");
require("tw-elements");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}










function $b255373d23396376$export$7f7cbe89f1eacd2() {
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
        className: "flex justify-center items-center",
        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
            className: "spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0",
            role: "status",
            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("span", {
                className: "visually-hidden",
                children: "Loading..."
            })
        })
    });
}
var $b255373d23396376$export$2e2bcd8739ae039 = $b255373d23396376$export$7f7cbe89f1eacd2;



const $41f71f5a6f8b36cf$var$color = "bg-white-600 dark:bg-slate-600 dark:text-gray-50";
const $41f71f5a6f8b36cf$var$formClassName = "border-x border-black mx-auto p-4 grid width gap-1";
const $41f71f5a6f8b36cf$var$buttonClassName = "rounded inline-block px-6 py-2.5 font-medium bg-blue-700 dark:bg-slate-600 dark:text-gray-50 hover:bg-white-600 focus:bg-white-600 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out";
const $41f71f5a6f8b36cf$var$inputClassName = "border border-1 border-black rounded-md p-1";
const $41f71f5a6f8b36cf$var$errorClassName = "md:col-span-2 text-red-500";
const $41f71f5a6f8b36cf$export$21a94553ffa41578 = ()=>{
    const [user, setUser] = $ltMAx$react.useState(null);
    const [isLoading, setLoading] = $ltMAx$react.useState(false);
    const navigate = $ltMAx$reactrouterdom.useNavigate();
    $ltMAx$react.useEffect(()=>{
        if (user !== null) {
            setLoading(false);
            navigate('/events');
            user.id = localStorage.uID;
            user.usertype = localStorage.usertype;
        }
    }, [
        user
    ]);
    function $41f71f5a6f8b36cf$export$21a94553ffa41578(e) {
        e.preventDefault();
        setLoading(true);
        // input validation required
        let username = e.target.username.value;
        let password = e.target.password.value;
        fetch(`https://localhost/users/login`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then((response)=>{
            if (!response.ok) throw new Error('An error has occured: ' + response.statusText);
            else return response.json();
        }).then((data)=>{
            console.log(data);
            localStorage.setItem('user', JSON.stringify(data));
            setUser(data);
        }).catch((error)=>{
            setLoading(false);
            alert(error);
        });
    }
    if (isLoading) return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($b255373d23396376$export$2e2bcd8739ae039, {});
    else // <body class="w-screen h-screen bg-purple-700 flex justify-center items-center">
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
        className: $41f71f5a6f8b36cf$var$formClassName + " " + $41f71f5a6f8b36cf$var$color,
        onSubmit: $41f71f5a6f8b36cf$export$21a94553ffa41578,
        children: [
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("legend", {
                className: "text-xl font-light",
                children: "Login"
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                        htmlFor: "username",
                        children: "Username"
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: "grid grid-cols-2 gap-4 place-content-end border border-slate-400 ",
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                className: "text-slate-600",
                                type: "text",
                                name: "username",
                                id: "username",
                                required: true,
                                placeholder: "Username"
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reacticonsfa.FaUser, {
                                className: "right-6 absolute"
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("p", {
                        className: "invisible peer-invalid:visible text-red-700 font-light",
                        children: "Please enter your username"
                    })
                ]
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                        htmlFor: "password",
                        children: "Password"
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: "grid grid-cols-2 peer border border-slate-400 ",
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                className: "text-slate-600",
                                type: "password",
                                name: "password",
                                id: "password",
                                required: true,
                                autoComplete: "current-password",
                                placeholder: "Password"
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reacticonsfa.FaKey, {
                                className: "absolute right-6"
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("p", {
                        className: "invisible peer-invalid:visible text-red-700 font-light",
                        children: "Please enter a valid password"
                    })
                ]
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                type: "submit",
                className: $41f71f5a6f8b36cf$var$buttonClassName,
                children: "Login"
            })
        ]
    });
};








const $8c958d1be105bd84$var$color = "bg-white-600 dark:bg-slate-600 dark:text-gray-50";
const $8c958d1be105bd84$var$formClassName = "border-x border-black mx-auto p-4 grid gap-1";
const $8c958d1be105bd84$var$buttonClassName = "rounded inline-block px-6 py-2.5 font-medium bg-blue-700 dark:bg-slate-600 dark:text-gray-50 hover:bg-white-600 focus:bg-white-600 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out";
const $8c958d1be105bd84$var$inputClassName = "border border-1 border-black rounded-md p-1";
const $8c958d1be105bd84$var$errorClassName = "md:col-span-2 text-red-500";
const $8c958d1be105bd84$export$157c131647dc68e = ()=>{
    const [user, setUser] = $ltMAx$react.useState(null);
    const [isLoading, setLoading] = $ltMAx$react.useState(false);
    const navigate = $ltMAx$reactrouterdom.useNavigate();
    $ltMAx$react.useEffect(()=>{
        if (user !== null) {
            setLoading(false);
            navigate('/');
        }
    }, [
        user
    ]);
    function $8c958d1be105bd84$export$157c131647dc68e(e) {
        e.preventDefault();
        setLoading(true);
        // input validation required
        let username = e.target.username.value;
        let password = e.target.password.value;
        fetch('https://localhost/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then((response)=>{
            if (!response.ok) throw new Error('An error has occured: ' + response.statusText);
            else return response.json();
        }).then((data)=>{
            console.log(data);
            localStorage.setItem('user', JSON.stringify(data));
            setUser(data);
        }).catch((error)=>{
            setLoading(false);
            alert(error);
        });
    }
    if (isLoading) return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($b255373d23396376$export$2e2bcd8739ae039, {});
    else // <body class="w-screen h-screen bg-purple-700 flex justify-center items-center">
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
        className: $8c958d1be105bd84$var$formClassName + " " + $8c958d1be105bd84$var$color,
        onSubmit: $8c958d1be105bd84$export$157c131647dc68e,
        children: [
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                className: "text-xl font-light",
                children: "Register"
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                        htmlFor: "username",
                        children: "Username"
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: "grid grid-cols-2 gap-4 place-content-end border border-slate-400 ",
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                className: "text-slate-600",
                                type: "text",
                                name: "username",
                                id: "username",
                                required: true,
                                placeholder: "Username"
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reacticonsfa.FaUser, {
                                className: "right-6 absolute"
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("p", {
                        className: "invisible peer-invalid:visible text-red-700 font-light",
                        children: "Please enter your username"
                    })
                ]
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                        htmlFor: "email",
                        children: "Email"
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: "grid grid-cols-2 peer border border-slate-400 ",
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                className: "text-slate-600",
                                type: "email",
                                name: "email",
                                id: "email",
                                required: true,
                                placeholder: "Email"
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reacticonsfa.FaBriefcase, {
                                className: "absolute right-6"
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("p", {
                        className: "invisible peer-invalid:visible text-red-700 font-light",
                        children: "Please enter a valid email"
                    })
                ]
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                        htmlFor: "phone",
                        children: "Phone"
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: "grid grid-cols-2 peer border border-slate-400 ",
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                className: "text-slate-600",
                                type: "phone",
                                name: "phone",
                                id: "phone",
                                required: true,
                                placeholder: "Phone"
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reacticonsfa.FaPhone, {
                                className: "absolute right-6"
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("p", {
                        className: "invisible peer-invalid:visible text-red-700 font-light",
                        children: "Please enter a valid phone"
                    })
                ]
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                        htmlFor: "password",
                        children: "Password"
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: "grid grid-cols-2 peer border border-slate-400 ",
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                className: "text-slate-600",
                                type: "password",
                                name: "password",
                                id: "password",
                                required: true,
                                autoComplete: "current-password",
                                placeholder: "Password"
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reacticonsfa.FaKey, {
                                className: "absolute right-6"
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("p", {
                        className: "invisible peer-invalid:visible text-red-700 font-light",
                        children: "Please enter a valid password"
                    })
                ]
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                type: "submit",
                className: $8c958d1be105bd84$var$buttonClassName,
                children: "Register"
            })
        ]
    });
};








const $29cd354e6a7f0027$var$buttonClassName = "rounded inline-block px-6 py-2.5 font-medium bg-white-600 dark:bg-slate-600 dark:text-gray-50 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out";
const $29cd354e6a7f0027$var$submitbuttonClassName = "rounded inline-block px-6 py-2.5 font-medium bg-white-600 dark:bg-slate-600 darktext-gray-50 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out";
const $29cd354e6a7f0027$var$accordionClassName = "accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none";
const $29cd354e6a7f0027$var$head = "flex items-center justify-center";
const $29cd354e6a7f0027$var$color = "bg-white-600 dark:bg-slate-600 dark:text-gray-50";
const $29cd354e6a7f0027$var$footer = "modal-footer flex flex-shrink-0 flex-wrap items-center justify-end gap-x-4 p-4 border-t border-gray-200 rounded-b-md";
const $29cd354e6a7f0027$export$8b251419efc915eb = ()=>{
    const themeChange = ()=>{
        if (document.getElementById("darkmode").checked) localStorage.theme = 'dark';
        else localStorage.theme = 'light';
        if (localStorage.theme === 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    };
    const Search = ()=>{
        document.getElementById("groupSearchAccordion").className = "accordion visible";
    //console.log(document.getElementsByClassName("accordion invisible"))
    //console.log(document.getElementById("groupSearchAccordion"))
    };
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs($ltMAx$reactjsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                className: $29cd354e6a7f0027$var$head + " " + $29cd354e6a7f0027$var$color,
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                    className: "inline-flex shadow-md hover:shadow-lg focus:shadow-lg",
                    role: "group",
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                            type: "button",
                            className: $29cd354e6a7f0027$var$buttonClassName,
                            "data-bs-toggle": "modal",
                            "data-bs-target": "#groupsModal",
                            children: "Search Groups"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                            type: "button",
                            className: $29cd354e6a7f0027$var$buttonClassName,
                            "data-bs-toggle": "modal",
                            "data-bs-target": "#menuModal",
                            children: "Menu"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                            type: "button",
                            className: $29cd354e6a7f0027$var$buttonClassName,
                            "data-bs-toggle": "modal",
                            "data-bs-target": "#menuModal",
                            children: "Menu"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                            type: "button",
                            className: $29cd354e6a7f0027$var$buttonClassName,
                            "data-bs-toggle": "modal",
                            "data-bs-target": "#menuModal",
                            children: "Menu"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                className: "modal fade fixed top-0 left-0 hidden w-full h-full text-gray-800 dark:text-white outline-none overflow-x-hidden overflow-y-auto",
                id: "menuModal",
                tabIndex: "-1",
                "aria-labelledby": "exampleModalLabel",
                "aria-hidden": "true",
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    className: "modal-dialog relative w-auto pointer-events-none",
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: "modal-content bg-white dark:bg-gray-600 border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-clip-padding rounded-md outline-none text-current",
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                className: "modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md",
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h5", {
                                        className: "text-xl font-medium leading-normal ",
                                        id: "optionsModalLabel",
                                        children: "User Options"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        type: "button",
                                        className: "btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline",
                                        "data-bs-dismiss": "modal",
                                        "aria-label": "Close"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                className: "modal-body relative p-4",
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                    className: "form-check",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                            className: "form-check-input bg-white appearance-none h-4 w-4 border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",
                                            type: "checkbox",
                                            value: "",
                                            id: "darkmode"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                            className: "form-check-label inline-block",
                                            htmlFor: "flexCheckDefault",
                                            children: "Theme: Darkmode"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                className: $29cd354e6a7f0027$var$footer,
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        type: "button",
                                        "data-bs-dismiss": "modal",
                                        children: "Close"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        type: "button",
                                        onClick: themeChange,
                                        children: "Save changes"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                className: "modal fade fixed top-0 left-0 hidden w-full h-full text-gray-800 dark:text-white outline-none overflow-x-hidden overflow-y-auto",
                id: "groupsModal",
                tabIndex: "-1",
                "aria-labelledby": "groupSearchModalLabel",
                "aria-hidden": "true",
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    className: "modal-dialog relative w-auto pointer-events-none",
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: "modal-content bg-white dark:bg-gray-600 border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-clip-padding rounded-md outline-none text-current",
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                className: "modal-header border-gray-200 flex flex-shrink-0 items-center justify-between p-4 border-b rounded-t-md",
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h5", {
                                        className: "text-xl font-medium leading-normal",
                                        id: "exampleModalLabel",
                                        children: "Group Search"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        type: "button",
                                        className: "btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline",
                                        "data-bs-dismiss": "modal",
                                        "aria-label": "Close"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                className: "modal-body relative p-4",
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                        className: "flex items-center justify-center ",
                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                            className: "flex border-2 border-gray-200 rounded",
                                            children: [
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                    type: "text",
                                                    className: "px-4 py-2 w-full",
                                                    placeholder: "Search..."
                                                }),
                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                                    className: "px-4 text-white bg-gray-600 border-l",
                                                    onClick: Search,
                                                    children: "Search"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                        id: "groupSearchAccordion",
                                        className: "accordion invisible",
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                className: "accordion-item border border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                                        className: "accordion-header mb-0",
                                                        id: "headingOne",
                                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                                            className: $29cd354e6a7f0027$var$accordionClassName,
                                                            type: "button",
                                                            "data-bs-toggle": "collapse",
                                                            "data-bs-target": "#collapseOne",
                                                            "aria-expanded": "false",
                                                            "aria-controls": "collapseOne",
                                                            children: "Work Times"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                                        id: "collapseOne",
                                                        className: "accordion-collapse collapse",
                                                        "aria-labelledby": "headingOne",
                                                        "data-bs-parent": "#accordionExample",
                                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                            className: "accordion-body py-4 px-5",
                                                            children: [
                                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("strong", {
                                                                    children: "This is the first item's accordion body."
                                                                }),
                                                                " It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",
                                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("code", {
                                                                    children: ".accordion-body"
                                                                }),
                                                                ", though the transition does limit overflow."
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                className: "accordion-item border border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                                        className: "accordion-header mb-0",
                                                        id: "headingTwo",
                                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                                            className: $29cd354e6a7f0027$var$accordionClassName,
                                                            type: "button",
                                                            "data-bs-toggle": "collapse",
                                                            "data-bs-target": "#collapseTwo",
                                                            "aria-expanded": "false",
                                                            "aria-controls": "collapseTwo",
                                                            children: "Friend Group"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                                        id: "collapseTwo",
                                                        className: "accordion-collapse collapse",
                                                        "aria-labelledby": "headingTwo",
                                                        "data-bs-parent": "#accordionExample",
                                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                            className: "accordion-body py-4 px-5",
                                                            children: [
                                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("strong", {
                                                                    children: "This is the second item's accordion body."
                                                                }),
                                                                " It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",
                                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("code", {
                                                                    children: ".accordion-body"
                                                                }),
                                                                ", though the transition does limit overflow."
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                className: "accordion-item border border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h2", {
                                                        className: "accordion-header mb-0",
                                                        id: "headingThree",
                                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                                            className: $29cd354e6a7f0027$var$accordionClassName,
                                                            type: "button",
                                                            "data-bs-toggle": "collapse",
                                                            "data-bs-target": "#collapseThree",
                                                            "aria-expanded": "false",
                                                            "aria-controls": "collapseThree",
                                                            children: "Family Timetable"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                                        id: "collapseThree",
                                                        className: "accordion-collapse collapse",
                                                        "aria-labelledby": "headingThree",
                                                        "data-bs-parent": "#accordionExample",
                                                        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                            className: "accordion-body py-4 px-5",
                                                            children: [
                                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("strong", {
                                                                    children: "This is the third item's accordion body."
                                                                }),
                                                                " It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",
                                                                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("code", {
                                                                    children: ".accordion-body"
                                                                }),
                                                                ", though the transition does limit overflow."
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                className: $29cd354e6a7f0027$var$footer,
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        type: "button",
                                        "data-bs-dismiss": "modal",
                                        children: "Close"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        type: "button",
                                        children: "Save changes"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};




const $6e885ac979a83d04$var$color = "bg-white-600 dark:bg-slate-600 dark:text-gray-50";
const $6e885ac979a83d04$var$formClassName = "container border-x border-black mx-auto p-4 grid md:grid-cols-2 gap-1";
const $6e885ac979a83d04$var$inputClassName = "border border-1 border-black rounded-md p-1";
const $6e885ac979a83d04$var$errorClassName = "md:col-span-2 text-red-500";
const $6e885ac979a83d04$export$40520cbd716fe920 = ()=>{
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs($ltMAx$reactjsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($8c958d1be105bd84$export$157c131647dc68e, {}),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($41f71f5a6f8b36cf$export$21a94553ffa41578, {})
        ]
    });
};







const $c4ef0f411944c818$var$formClassName = "container border-x border-black mx-auto p-4 grid gap-1";
const $c4ef0f411944c818$var$table = "grid grid-cols-6 m-2 shadow-lg bg-white border-separate";
function $c4ef0f411944c818$export$2e2bcd8739ae039({ events: events1  }) {
    const { id: id , name: name , description: description , startTime_Date: startTime_Date , endTime_Date: endTime_Date  } = events1;
    const deleteEvent = (events)=>{
        console.log(events.target.id);
        var url = `http://localhost:5000/events/delete/${id}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            if (res.status === 200) {
                alert("event successfully deleted");
                window.location.reload();
            } else Promise.reject();
        }).catch((err)=>alert("Something went wrong")
        );
    };
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactjsxruntime.Fragment, {
        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
            className: $c4ef0f411944c818$var$table,
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    children: name
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    children: description
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    children: startTime_Date
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    children: endTime_Date
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                        type: "button",
                        children: "Edit"
                    })
                }),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                        type: "button",
                        onClick: deleteEvent,
                        size: "sm",
                        variant: "danger",
                        children: id
                    })
                })
            ]
        })
    });
}




const $422de6cfa3dd5951$var$buttonClassName = "rounded inline-block px-6 py-2.5 font-medium bg-white-600 dark:bg-slate-600 dark:text-gray-50 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out";
const $422de6cfa3dd5951$var$color = "bg-white-600 dark:bg-slate-600 dark:text-gray-50";
const $422de6cfa3dd5951$var$formClassName = "border-black mx-auto p-4 grid gap-1";
const $422de6cfa3dd5951$var$table = "grid grid-cols-6 m-2 shadow-lg bg-white border-separate";
const $422de6cfa3dd5951$var$inputClassName = "border border-1 border-black rounded-md p-1";
const $422de6cfa3dd5951$var$errorClassName = "md:col-span-2 text-red-500";
const $422de6cfa3dd5951$var$footer = "modal-footer flex flex-shrink-0 flex-wrap items-center justify-end gap-x-4 p-4 border-t border-gray-200 rounded-b-md";
function $422de6cfa3dd5951$export$2e2bcd8739ae039() {
    //let user = JSON.parse(localStorage.getItem('user'))
    //console.log(user)
    const [events1, setEvents] = $ltMAx$react.useState([]);
    const [isLoading, setLoading] = $ltMAx$react.useState(true);
    $ltMAx$react.useEffect(()=>{
        if (events1 !== []) setLoading(false);
    }, [
        events1
    ]);
    $ltMAx$react.useEffect(()=>{
        setLoading(true);
        fetch(`http://localhost:5000/events/1`, {
            method: 'GET',
            headers: {
                //'Authorization': 'Bearer ' + user.token,
                'Accept': 'application/json'
            }
        }).then((response)=>{
            if (!response.ok) throw new Error('The following error has occured: ' + response.statusText);
            else return response.json();
        }).then((data)=>{
            setEvents(data);
        }).catch((error)=>{
            alert(error);
            setLoading(false);
        });
    }, []);
    function addEvent(e) {
        e.preventDefault();
        setLoading(true);
        // input validation required
        let name = e.target.name.value;
        let description = e.target.description.value;
        let time = e.target.time.value;
        let date = e.target.date.value;
        fetch('https://localhost/events/addevent/1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                description: description,
                time: time,
                date: date
            })
        }).then((response)=>{
            if (!response.ok) throw new Error('An error has occured: ' + response.statusText);
            else return response.json();
        }).then((data)=>{
            console.log(data);
            localStorage.setItem('user', JSON.stringify(data));
            setUser(data);
        }).catch((error)=>{
            setLoading(false);
            alert(error);
        });
    }
    if (isLoading) return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($b255373d23396376$export$2e2bcd8739ae039, {});
    else return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs($ltMAx$reactjsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                className: $422de6cfa3dd5951$var$formClassName,
                children: [
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: "grid grid-cols-2",
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                                children: "Event List"
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                type: "button",
                                className: $422de6cfa3dd5951$var$buttonClassName,
                                "data-bs-toggle": "modal",
                                "data-bs-target": "#addEventModal",
                                children: "Add Event+"
                            })
                        ]
                    }),
                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: "card shadow col",
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                className: $422de6cfa3dd5951$var$table,
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                        className: "text-left border ",
                                        children: "Name"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                        className: "text-left border ",
                                        children: "Description"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                        className: "text-left border ",
                                        children: "Date"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                        className: "text-left border ",
                                        children: "Time"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                        className: "text-left border ",
                                        children: "Edit"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                        className: " text-left border ",
                                        children: "Delete"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                children: events1.data.map((events, i)=>/*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($c4ef0f411944c818$export$2e2bcd8739ae039, {
                                        events: events
                                    }, i)
                                )
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                className: "modal fade fixed top-0 left-0 hidden w-full h-full text-gray-800 dark:text-white outline-none overflow-x-hidden overflow-y-auto",
                id: "addEventModal",
                tabIndex: "-1",
                "aria-labelledby": "exampleModalLabel",
                "aria-hidden": "true",
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    className: "modal-dialog relative w-auto pointer-events-none",
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: "modal-content bg-white dark:bg-gray-600 border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-clip-padding rounded-md outline-none text-current",
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                className: "modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md",
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h5", {
                                        className: "text-xl font-medium leading-normal ",
                                        id: "optionsModalLabel",
                                        children: "Add Event"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        type: "button",
                                        className: "btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline",
                                        "data-bs-dismiss": "modal",
                                        "aria-label": "Close"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                className: "modal-body relative p-4",
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                    className: "form-check",
                                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("form", {
                                        className: $422de6cfa3dd5951$var$formClassName + " " + $422de6cfa3dd5951$var$color,
                                        children: [
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h1", {
                                                className: "text-xl font-light",
                                                children: "New Event"
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                        htmlFor: "name",
                                                        children: "Name"
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                        className: "text-gray-700 peer border border-slate-400",
                                                        type: "text",
                                                        name: "name",
                                                        id: "name",
                                                        required: true
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("p", {
                                                        className: "invisible peer-invalid:visible text-red-700 font-light",
                                                        children: "Please enter your Name"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                        htmlFor: "description",
                                                        children: "Description"
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("textarea", {
                                                        name: "message",
                                                        id: "message",
                                                        cols: "30",
                                                        rows: "3",
                                                        required: true,
                                                        className: " text-gray-700 peer border border-slate-400"
                                                    }),
                                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("p", {
                                                        className: "invisible peer-invalid:visible text-red-700 font-light",
                                                        children: "This field cannot be empty"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                                className: "flex items-center justify-center",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                    className: "datepicker relative form-floating mb-3 xl:w-96",
                                                    "data-mdb-toggle-button": "false",
                                                    children: [
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                            type: "date",
                                                            className: "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
                                                            placeholder: "Select a date",
                                                            "data-mdb-toggle": "datepicker"
                                                        }),
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                            htmlFor: "floatingInput",
                                                            className: "text-gray-700",
                                                            children: "Select a date"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                                className: "flex justify-center",
                                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                                    className: "timepicker relative form-floating mb-3 xl:w-96",
                                                    "data-mdb-with-icon": "true",
                                                    id: "input-toggle-timepicker",
                                                    children: [
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                                            type: "time",
                                                            className: "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
                                                            placeholder: "Select a time",
                                                            "data-mdb-toggle": "input-toggle-timepicker"
                                                        }),
                                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                                            htmlFor: "floatingInput",
                                                            className: "text-gray-700",
                                                            children: "Select a time"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                className: $422de6cfa3dd5951$var$footer,
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        type: "button",
                                        "data-bs-dismiss": "modal",
                                        children: "Close"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        type: "button",
                                        onClick: addEvent,
                                        children: "Add Event"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}





const $76d3f03a03a6aeec$var$buttonClassName = "rounded inline-block px-6 py-2.5 font-medium bg-white-600 dark:bg-slate-600 dark:text-gray-50 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out";
const $76d3f03a03a6aeec$var$submitbuttonClassName = "rounded inline-block px-6 py-2.5 font-medium bg-white-600 dark:bg-slate-600 darktext-gray-50 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out";
const $76d3f03a03a6aeec$var$accordionClassName = "accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none";
const $76d3f03a03a6aeec$var$head = "flex items-center justify-center";
const $76d3f03a03a6aeec$var$color = "bg-white-600 dark:bg-slate-600 dark:text-gray-50";
const $76d3f03a03a6aeec$var$footer = "modal-footer flex flex-shrink-0 flex-wrap items-center justify-end gap-x-4 p-4 border-t border-gray-200 rounded-b-md";
const $76d3f03a03a6aeec$export$8b251419efc915eb = ()=>{
    const themeChange = ()=>{
        if (document.getElementById("darkmode").checked) localStorage.theme = 'dark';
        else localStorage.theme = 'light';
        if (localStorage.theme === 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    };
    const Search = ()=>{
        document.getElementById("groupSearchAccordion").className = "accordion visible";
    //console.log(document.getElementsByClassName("accordion invisible"))
    //console.log(document.getElementById("groupSearchAccordion"))
    };
    return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs($ltMAx$reactjsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                className: $76d3f03a03a6aeec$var$head + " " + $76d3f03a03a6aeec$var$color,
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                    className: "inline-flex shadow-md hover:shadow-lg focus:shadow-lg",
                    role: "group",
                    children: [
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                            type: "button",
                            className: $76d3f03a03a6aeec$var$buttonClassName,
                            "data-bs-toggle": "modal",
                            "data-bs-target": "#menuModal",
                            children: "Menu"
                        }),
                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                            type: "button",
                            className: $76d3f03a03a6aeec$var$buttonClassName,
                            children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Link, {
                                to: "/events",
                                children: "Schedule"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                className: "modal fade fixed top-0 left-0 hidden w-full h-full text-gray-800 dark:text-white outline-none overflow-x-hidden overflow-y-auto",
                id: "menuModal",
                tabIndex: "-1",
                "aria-labelledby": "exampleModalLabel",
                "aria-hidden": "true",
                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    className: "modal-dialog relative w-auto pointer-events-none",
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                        className: "modal-content bg-white dark:bg-gray-600 border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-clip-padding rounded-md outline-none text-current",
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                className: "modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md",
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("h5", {
                                        className: "text-xl font-medium leading-normal ",
                                        id: "optionsModalLabel",
                                        children: "User Options"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        type: "button",
                                        className: "btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline",
                                        "data-bs-dismiss": "modal",
                                        "aria-label": "Close"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                                className: "modal-body relative p-4",
                                children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                    className: "form-check",
                                    children: [
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("input", {
                                            className: "form-check-input bg-white appearance-none h-4 w-4 border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",
                                            type: "checkbox",
                                            value: "",
                                            id: "darkmode"
                                        }),
                                        /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("label", {
                                            className: "form-check-label inline-block",
                                            htmlFor: "flexCheckDefault",
                                            children: "Theme: Darkmode"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs("div", {
                                className: $76d3f03a03a6aeec$var$footer,
                                children: [
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        type: "button",
                                        "data-bs-dismiss": "modal",
                                        children: "Close"
                                    }),
                                    /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("button", {
                                        type: "button",
                                        onClick: themeChange,
                                        children: "Save changes"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};



const $86170abfc0122593$export$86fbec116b87613f = ()=>{
    /*const [UID, setUID] = useState("")

   if(!UID) {
        return <Login setUID={setUID} />
        localStorage.setItem("UID", "1")
    }*/ return /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactjsxruntime.Fragment, {
        children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs($ltMAx$reactrouterdom.BrowserRouter, {
            children: [
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($76d3f03a03a6aeec$export$8b251419efc915eb, {}),
                /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx("div", {
                    className: "Dashboard",
                    children: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsxs($ltMAx$reactrouterdom.Routes, {
                        children: [
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                                path: "/",
                                element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($6e885ac979a83d04$export$40520cbd716fe920, {})
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                                path: "/events",
                                element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($422de6cfa3dd5951$export$2e2bcd8739ae039, {})
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                                path: "*",
                                element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Navigate, {
                                    replace: true,
                                    to: "/"
                                })
                            }),
                            /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($ltMAx$reactrouterdom.Route, {
                                path: "/groups",
                                element: /*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($422de6cfa3dd5951$export$2e2bcd8739ae039, {})
                            })
                        ]
                    })
                })
            ]
        })
    });
};


// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://cra.link/PWA
const $4be5e5ad997a88ba$var$isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function $4be5e5ad997a88ba$export$6503ec6e8aabbaf(config) {
    if ('serviceWorker' in navigator) {
        // The URL constructor is available in all browsers that support SW.
        const publicUrl = new URL(undefined, window.location.href);
        if (publicUrl.origin !== window.location.origin) // Our service worker won't work if PUBLIC_URL is on a different origin
        // from what our page is served on. This might happen if a CDN is used to
        // serve assets; see https://github.com/facebook/create-react-app/issues/2374
        return;
        window.addEventListener('load', ()=>{
            const swUrl = `${undefined}/service-worker.js`;
            if ($4be5e5ad997a88ba$var$isLocalhost) {
                // This is running on localhost. Let's check if a service worker still exists or not.
                $4be5e5ad997a88ba$var$checkValidServiceWorker(swUrl, config);
                // Add some additional logging to localhost, pointing developers to the
                // service worker/PWA documentation.
                navigator.serviceWorker.ready.then(()=>{
                    console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA");
                });
            } else // Is not localhost. Just register service worker
            $4be5e5ad997a88ba$var$registerValidSW(swUrl, config);
        });
    }
}
function $4be5e5ad997a88ba$var$registerValidSW(swUrl, config) {
    navigator.serviceWorker.register(swUrl).then((registration)=>{
        registration.onupdatefound = ()=>{
            const installingWorker = registration.installing;
            if (installingWorker == null) return;
            installingWorker.onstatechange = ()=>{
                if (installingWorker.state === 'installed') {
                    if (navigator.serviceWorker.controller) {
                        // At this point, the updated precached content has been fetched,
                        // but the previous service worker will still serve the older
                        // content until all client tabs are closed.
                        console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA.");
                        // Execute callback
                        if (config && config.onUpdate) config.onUpdate(registration);
                    } else {
                        // At this point, everything has been precached.
                        // It's the perfect time to display a
                        // "Content is cached for offline use." message.
                        console.log('Content is cached for offline use.');
                        // Execute callback
                        if (config && config.onSuccess) config.onSuccess(registration);
                    }
                }
            };
        };
    }).catch((error)=>{
        console.error('Error during service worker registration:', error);
    });
}
function $4be5e5ad997a88ba$var$checkValidServiceWorker(swUrl, config) {
    // Check if the service worker can be found. If it can't reload the page.
    fetch(swUrl, {
        headers: {
            'Service-Worker': 'script'
        }
    }).then((response)=>{
        // Ensure service worker exists, and that we really are getting a JS file.
        const contentType = response.headers.get('content-type');
        if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then((registration)=>{
            registration.unregister().then(()=>{
                window.location.reload();
            });
        });
        else // Service worker found. Proceed as normal.
        $4be5e5ad997a88ba$var$registerValidSW(swUrl, config);
    }).catch(()=>{
        console.log('No internet connection found. App is running in offline mode.');
    });
}
function $4be5e5ad997a88ba$export$d07f55d4c15c0440() {
    if ('serviceWorker' in navigator) navigator.serviceWorker.ready.then((registration)=>{
        registration.unregister();
    }).catch((error)=>{
        console.error(error.message);
    });
}


const $4fa36e821943b400$var$appElement = document.getElementById("app");
($parcel$interopDefault($ltMAx$reactdom)).render(/*#__PURE__*/ $ltMAx$reactjsxruntime.jsx($86170abfc0122593$export$86fbec116b87613f, {}), $4fa36e821943b400$var$appElement);
$4be5e5ad997a88ba$export$6503ec6e8aabbaf();


//# sourceMappingURL=index.js.map
