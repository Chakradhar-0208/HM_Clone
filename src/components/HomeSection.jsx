import { useParams } from "react-router-dom";
import { useState } from "react";
import { FiPlus, FiFilter } from "react-icons/fi";
const homeSections = {
    summerBedding: {
        title: "SUMMER BEDDING",
        image:
            "https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-27/7002E-V27-4x5.jpg?imwidth=4800",
        products: {
            cottonKingDuvet: {
                title: "COTTON DOUBLE/KING DUVET COVER SIZE",
                price: "2,999.00",
                image:
                    "	https://image.hm.com/assets/hm/58/9e/589e6616c6f4faad93385126af51526ee243f6d9.jpg?imwidth=1536",
            },
            patternedDuvet: {
                title: "PATTERNED DOUBLE/KING SIZE DUVET COVER SET",
                price: "1,499.00",
                image:
                    "	https://image.hm.com/assets/hm/9b/10/9b10ab1b6c7ad0ff4e846877619a4b1c02357476.jpg?imwidth=1536",
            },

            muslinGown: {
                title: "MUSLIN DRESSING GOWN",
                price: "1,899.00",
                image:
                    "https://image.hm.com/assets/hm/90/f6/90f619b1971c88455bc4768f576142786b963930.jpg?imwidth=1536 ",
            },
            muslinDoubleDuvet: {
                title: "MUSLIN DOUBLE DUVET COVER SET",
                price: "4,999.00",
                image:
                    "	https://image.hm.com/assets/hm/60/8b/608bc7e7f12ae5b4b5b593588f04211bc614b486.jpg?imwidth=1536",
            },

            satinPyjamas: {
                title: "SATIN PYJAMAS",
                price: "2,499.00",
                image:
                    "		https://image.hm.com/assets/hm/6f/f4/6ff4513ef5ae1f2936aa8be55d24889543e5467a.jpg?imwidth=1536",
            },
            cottonPillowCase: {
                title: "COTTON PILLOW CASE",
                price: "299.00",
                image: "	https://image.hm.com/assets/hm/d6/4d/d64d0d7f8e1621d9aa43ebad83e58e0136d7ee50.jpg?imwidth=1536",
            },
            finrgedBedSpread: {
                title: "FRINGED BEDSPREAD",
                price: "2,699.00",
                image:
                    "		https://image.hm.com/assets/hm/19/7c/197cae745dcc6d7925cd9d0f1e550de9706f9f1c.jpg?imwidth=1536",
            },
            leninBlendDouble: {
                title: "LENIN-BLEND DOUBLE/KING SIZE DUVET COVER SET",
                price: "5,999.00",
                image:
                    "https://image.hm.com/assets/hm/08/68/08680e7a778c2a1a00739e7a45e40ed1ac6b62df.jpg?imwidth=1536",
            }
        },
    },
    linen_looks: {
        title: "LINEN LOOKS",
        image:
            "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w27/MS32E1-2x3-wk27.jpg?imwidth=4800",
        products: {
            regFit_LinenBlendTrousers: {
                title: "REGULAR FIT LINEN-BLEND TROUSERS",
                price: "2,999.00",
                image:
                    "https://image.hm.com/assets/hm/de/74/de74869d8c461f1455bb800621bf4a38be9d8030.jpg?imwidth=1536",
            },
            linenJacket: {
                title: "SLIM FIT LINEN JACKET",
                price: "5,999.00",
                image:
                    "https://image.hm.com/assets/hm/3f/62/3f62e6d763adc4e1d1c101a987e7d063afa50c74.jpg?imwidth=1536",
            },
            regFit_ResortShirt: {
                title: "REGULAR FIT LINEN-BLEND RESORT SHIRT",
                price: "2,799.00",
                image:
                    "	https://image.hm.com/assets/hm/d7/b9/d7b939dcd7f4e0b9fca6ef65a4f01d689efa75e1.jpg?imwidth=1536",
            },



            cottonPillowCase: {
                title: "COTTON PILLOW CASE",
                price: "299.00",
                image: "	https://image.hm.com/assets/hm/d6/4d/d64d0d7f8e1621d9aa43ebad83e58e0136d7ee50.jpg?imwidth=1536",
            },
            finrgedBedSpread: {
                title: "FRINGED BEDSPREAD",
                price: "2,699.00",
                image:
                    "		https://image.hm.com/assets/hm/19/7c/197cae745dcc6d7925cd9d0f1e550de9706f9f1c.jpg?imwidth=1536",
            },
            leninBlendDouble: {
                title: "LENIN-BLEND DOUBLE/KING SIZE DUVET COVER SET",
                price: "5,999.00",
                image:
                    "https://image.hm.com/assets/hm/08/68/08680e7a778c2a1a00739e7a45e40ed1ac6b62df.jpg?imwidth=1536",
            },
            regFit_LinenBlendShorts: {
                title: "REGULAR FIT LINEN-BLEND SHORTS",
                price: "1,999.00",
                image:
                    "https://image.hm.com/assets/hm/93/70/9370069dcd241ae49a40ad5a4582d9d57ba91682.jpg?imwidth=1536",
            },
            regFit_Shirt: {
                title: "REGULAR FIT LINEN-BLEND SHIRT",
                price: "2,299.00",
                image:
                    "	https://image.hm.com/assets/hm/86/3d/863d5017d6333e8c44d5a8d766b8fdf8cb2177b1.jpg?imwidth=1536",
            },
        },
    },
    jeans: {
        title: "JEANS",
        image:
            "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w27/Jeans-CE-wk-27-30.jpg??imwidth=1536",
        products: {
            relaxedJeans: {
                title: "RELAXED JEANS",
                price: "1,999.00",
                image:
                    "https://image.hm.com/assets/hm/e5/29/e529a515f56d9f12632954548173f86c9c6e5c68.jpg?imwidth=1536",
            },
            looseJEans: {
                title: "LOOSE JEANS",
                price: "2,299.00",
                image:
                    "https://image.hm.com/assets/hm/61/d0/61d03fa770ad1c6a31fb8919798dc83ea8d3bdec.jpg?imwidth=1536",
            },
            strRegJeans: {
                title: "STRAIGHT REGULAR JEANS",
                price: "1,799.00",
                image:
                    "https://image.hm.com/assets/hm/47/22/4722ecac7c278331feffe1037d238d13da7606aa.jpg?imwidth=1536",
            },
            regJeans: {
                title: "REGULAR JEANS",
                price: "2,299.00",
                image:
                    "https://image.hm.com/assets/hm/ee/46/ee46c3b15e2d01a75624730fe481482e5f9ffbaa.jpg?imwidth=1536 ",
            },
            looseJeans: {
                title: "LOOSE JEANS",
                price: "2,299.00",
                image:
                    "https://image.hm.com/assets/hm/c7/8b/c78b07056276ddaabce1bcfab3709e78976a756a.jpg?imwidth=1536",

                //
            },
            baggyJeans: {
                title: "BAGGY JEANS",
                price: "2,699.00",
                image:
                    "https://image.hm.com/assets/hm/b9/db/b9dbcc63d87071fdff2eb964c78cb5fbe64f941e.jpg?imwidth=1536",
            },
        },
    },
    cushionCovers: {
        title: "CUSHION COVERS",
        image:
            "https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-27/7002A-V27-4x5.jpg?imwidth=4800",
        products: {
            patternedCushionCover: {
                title: "PATTERNED CUSHION COVER",
                price: "499.00",
                image:
                    "https://image.hm.com/assets/hm/66/a6/66a681fe2ffee38a4dbab887ab86a4a4c07e7eec.jpg?imwidth=1536",
            },
            threePackStructureWeave: {
                title: "3-PACK STRUCTURE-WEAVE CUSHION COVER",
                price: "1,899.00",
                image:"https://image.hm.com/assets/hm/aa/05/aa052d433d60f8a2f80921e380d2cd4875a650aa.jpg?imwidth=1536",
            },
            patternedCottonCover: {
                title: "PATTERENED COTTON CUSHION COVER",
                price: "1,899.00",
                image:
                    "https://image.hm.com/assets/hm/dd/17/dd173b0ca93baa3633b33d35c751a56886461c9d.jpg?imwidth=1536",
            },
            patternedCanvasCover: {
                title: "PATTERNED CANVAS CUSHION COVER",
                price: "399.00",
                image:
                    "https://image.hm.com/assets/hm/3b/79/3b7970953bad0a9974b69939e98948a45883504a.jpg?imwidth=1536"
            },
            candyCaneCushion: {
                title: "CANDY CANE CUSHION",
                price: "1,299.00",
                image:
                    "https://image.hm.com/assets/hm/40/bc/40bc561fdc17782ebacc06454f1e60d2463cee68.jpg?imwidth=1536",
            },
           slubWeave : {
                title: "SLUB WEAVE CUSHION CIVER",
                price: "649.00",
                image:
                    "https://image.hm.com/assets/hm/6f/df/6fdfa555642f21ca15565ea9bc16bc25445486f5.jpg?imwidth=1536 ",
            },
        },
    },
    homeDecorations: {
        title: "HOME DECORATIONS",
        image:
            "https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Decorations_CE_wk23-28-2x3_4.jpg?imwidth=1536",
        products: {
            reedDiffuser: {
                title: "REED DIFFUSER",
                price: "1,099.00",
                image: "https://image.hm.com/assets/hm/ad/f1/adf1e5eecc1c885ef6e7809af1842b8049fa0c27.jpg?imwidth=1536",
            },
            patternedCushion: {
                title: "PATTERNED CUSHIONE COVER",
                price: "499.00",
                image:
                    "	https://image.hm.com/assets/hm/66/a6/66a681fe2ffee38a4dbab887ab86a4a4c07e7eec.jpg?imwidth=1536",
            },
            largeRattan: {
                title: "LARGE RATTAN PLANT POT HOLE",
                price: "2,999.00",
                image:
                    "	https://image.hm.com/assets/hm/91/8a/918ad26d77a1cc1269485833e38573577bae271e.jpg?imwidth=1536",
            },
            marbleBookend: {
                title: "MARBLE BOOKEND",
                price: "1,699.00",
                image: "https://image.hm.com/assets/hm/3e/d8/3ed85daa635bf1eb7e494c363e31fbb4135bc7ae.jpg?imwidth=1536",
            },
            smallScentedCandle: {
                title: "SMALL SCENTED CANDLE",
                price: "299.00",
                image:
                    "https://image.hm.com/assets/hm/9b/88/9b88369f5bc5f25c59e72c9b1c042730cc7f6259.jpg?imwidth=1536",
            },
            stoneware: {
                title: "STONEWARE CANDLESTICK",
                price: "1,299.00",
                image:
                    "	https://image.hm.com/assets/hm/35/6e/356e1b368fa7c6b9cf27806d8e63fa9c9ee13bb7.jpg?imwidth=1536",
            },
        },
    },
    towels: {
        title: "TOWELS",
        image:
            "https://image.hm.com/content/dam/global_campaigns/season_02/home/start-page-assets-/v-23/category-entries/Towels_CE_wk23-28-2x3_5.jpg?imwidth=1536",
        products: {
                patternedBathTowel: {
                title: "PATTERNED BATH TOWEL",
                price: "799.00",
                image:"	https://image.hm.com/assets/hm/66/ba/66ba53e5528e45348d91ecab907cc96115f32da2.jpg?imwidth=1536",
            },
                bathTowel: {
                title: "BathTowel",
                price: "999.00",
                image:
                    "	https://image.hm.com/assets/hm/4d/a2/4da2b74dfbadb9b1905489df835f37875a70c6c3.jpg?imwidth=1536 ",
            },
            twoPackCotton: {
                title: "2-PACK COTTION TERRY GUEST TOWELS",
                price: "699.00",
                image:"	https://image.hm.com/assets/hm/6d/42/6d42b0bd902b60b16c1eacfb5aa31f12220c3ea5.jpg?imwidth=1536",
            },
            patternedBathTowelLego: {
                title: "LEGO PATTERNED BATH TOWEL",
                price: "799.00",
                image:
                    "	https://image.hm.com/assets/hm/6c/e7/6ce7eb0d0c67ec1b763dcfd720526a6f8fd3eb49.jpg?imwidth=1536",
            },
            terryBathSheet: {
                title: "TERRY BATH SHEET",
                price: "1,299.00",
                image:
                    "	https://image.hm.com/assets/hm/4b/a6/4ba6d6bb9f414ab8c9b3be644a1e8b324b7226a5.jpg?imwidth=1536",
            },
            hooededBathTowel: {
                title: "HOODED BATH TOWEL",
                price: "1,299",
                image:
                    "		https://image.hm.com/assets/hm/d9/c3/d9c3675ebe27930cbb1c2de1ce6a684de92c3035.jpg?imwidth=1536",
            },
        },
    },
};

const sectionTitles = {
    summerBedding: "SUMMER BEDDING",
    cushionCovers: "CUSHIONS & CUSHION COVERS",
    bedLinen: "BED LINEN",
    cookingDining: "COOKING & DINING",
    towels: "TOWELS",
    homeDecorations: "HOME DECORATIONS",
};

export default function HomeSection() {
    const { sectionId } = useParams();
    const section = homeSections[sectionId];
    if (!section) {
        return <div className="p-6 text-red-600">404: Section not Found</div>;
    }
    const product = section.products || {};
    const [wishlist, setWishlist] = useState({});

    const toggleWishlist = (key) => {
        setWishlist((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };
    return (
        <div className="lg:mt-[130px]">
            <div className="p-6">
                <h1 className="font-bold overflow-hidden text-4xl">
                    {sectionTitles[sectionId]?.toUpperCase()}
                </h1>
                <div className="flex justify-between mt-8">
                    <p className="flex justify-between items-center gap-2">
                        SORT BY <FiPlus className="w-5 h-5" />
                    </p>
                    <p className="flex justify-between items-center gap-2 ">
                        FILTER  <FiFilter className="w-4 h-5 " />
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap">
                {Object.entries(product).map(([key, product]) => (
                    <div key={key} className="w-[50%] md:w-[25%]">
                        <div>
                            <img src={product.image} alt={product.title} className="w-full" />
                            <img
                                onClick={() => {
                                    toggleWishlist(key);
                                }}
                                className="relative  -translate-y-8 left-[85%] sm:left-[90%] md:left-[85%] lg:left-[90%] w-5 h-5 fill-white cursor-pointer"
                                src={
                                    wishlist[key]
                                        ? "https://res.cloudinary.com/dppnjyn8a/image/upload/v1751882673/rro2nzzvvy3lbzkbtbmk.png"
                                        : "https://res.cloudinary.com/dppnjyn8a/image/upload/v1751882702/emr1pnwelzy5uzbrx1d7.png"
                                }
                                alt="like--v1"
                            ></img>
                        </div>
                        <div className="  py-2 -mt-5 lg:text-base text-sm pl-2">
                            <p className="font-medium">{product.title}</p>
                            <strong>{`₹ ${product.price}`}</strong>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
