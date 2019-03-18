(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('zhiye-admin', {
        "color": [
            "#23b7e5",
            "#27c24c",
            "#7266ba",
            "#18c29c",
            "#f05050",
            "#e67e22",
            "#eac459",
            "#ff5b77",
            "#6e7074",
            "#546570",
            "#c4ccd3"
        ],
        "grid": {
            "top": '40',
            "left": '0',
            "right": '0',
            "bottom": '0',
            "containLabel": true
        },
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "textStyle": {
            "fontFamily": "PingFang SC"
        },
        "title": {
            "textStyle": {
                "color": "#333"
            },
            "subtextStyle": {
                "color": "#aaa"
            }
        },
        "line": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2"
                }
            },
            "symbolSize": "8",
            "symbol": "circle",
            "smooth": false
        },
        "radar": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2"
                }
            },
            "symbolSize": "8",
            "symbol": "circle",
            "smooth": false
        },
        "bar": {
            "itemStyle": {
                "normal": {
                    "barBorderWidth": "0",
                    "barBorderColor": "#cccccc"
                },
                "emphasis": {
                    "barBorderWidth": "0",
                    "barBorderColor": "#cccccc"
                }
            }
        },
        "pie": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#cccccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#cccccc"
                }
            }
        },
        "scatter": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#cccccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#cccccc"
                }
            }
        },
        "boxplot": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#cccccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#cccccc"
                }
            }
        },
        "parallel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#cccccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#cccccc"
                }
            }
        },
        "sankey": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#cccccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#cccccc"
                }
            }
        },
        "funnel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#cccccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#cccccc"
                }
            }
        },
        "gauge": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#cccccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#cccccc"
                }
            }
        },
        "candlestick": {
            "itemStyle": {
                "normal": {
                    "color": "#c23531",
                    "color0": "#314656",
                    "borderColor": "#c23531",
                    "borderColor0": "#314656",
                    "borderWidth": 1
                }
            }
        },
        "graph": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#cccccc"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1,
                    "color": "#aaa"
                }
            },
            "symbolSize": "6",
            "symbol": "emptyCircle",
            "smooth": false,
            "color": [
                "#23b7e5",
                "#27c24c",
                "#7266ba",
                "#18c29c",
                "#f05050",
                "#e67e22",
                "#eac459",
                "#ff5b77",
                "#6e7074",
                "#546570",
                "#c4ccd3"
            ],
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#eee"
                    }
                }
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#f0f3f4",
                    "borderColor": "#c5c5ca",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "#23b7e5",
                    "borderColor": "#23b7e5",
                    "borderWidth": "0"
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#333333"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#333333"
                    }
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#f0f3f4",
                    "borderColor": "#c5c5ca",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "#23b7e5",
                    "borderColor": "#23b7e5",
                    "borderWidth": "0"
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#333333"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#333333"
                    }
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#c5c5ca"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#c5c5ca"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#999999"
                }
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#edf1f2"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#c5c5ca"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#c5c5ca"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#999999"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#edf1f2"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#c5c5ca"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#c5c5ca"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#999999"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#edf1f2"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#c5c5ca"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#c5c5ca"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#999999"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#edf1f2"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "normal": {
                    "borderColor": "#999"
                },
                "emphasis": {
                    "borderColor": "#666"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#333"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#c5c5ca",
                    "width": 1
                },
                "crossStyle": {
                    "color": "#c5c5ca",
                    "width": 1
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#293c55",
                "width": 1
            },
            "itemStyle": {
                "normal": {
                    "color": "#293c55",
                    "borderWidth": 1
                },
                "emphasis": {
                    "color": "#a9334c"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#293c55",
                    "borderColor": "#293c55",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "color": "#293c55",
                    "borderColor": "#293c55",
                    "borderWidth": 0.5
                }
            },
            "checkpointStyle": {
                "color": "#e43c59",
                "borderColor": "rgba(194,53,49, 0.5)"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#293c55"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#293c55"
                    }
                }
            }
        },
        "visualMap": {
            "color": [
                "#f05050",
                "#e67e22",
                "#eac459"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(47,69,84,0)",
            "dataBackgroundColor": "rgba(47,69,84,0.3)",
            "fillerColor": "rgba(167,183,204,0.4)",
            "handleColor": "#a7b7cc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#333"
            }
        },
        "markPoint": {
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#eee"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#eee"
                    }
                }
            }
        }
    });
}));
