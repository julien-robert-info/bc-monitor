export interface VaultInfo {
  token: string
  address: string
}

export const qiVaults: { [chainId: number]: Array<VaultInfo> } = {
  137: [
    {
      token: 'WETH',
      address: '0x3fd939B017b31eaADF9ae50C7fF7Fa5c0661d47C'
    },
    {
      token: 'LINK',
      address: '0x61167073E31b1DAd85a3E531211c7B8F1E5cAE72'
    },
    {
      token: 'AAVE',
      address: '0x87ee36f780ae843A78D5735867bc1c13792b7b11'
    },
    {
      token: 'CRV',
      address: '0x98B5F32dd9670191568b661a3e847Ed764943875'
    },
    {
      token: 'BAL',
      address: '0x701A1824e5574B0b6b1c8dA808B184a7AB7A2867'
    },
    {
      token: 'dQUICK',
      address: '0x649Aa6E6b6194250C077DF4fB37c23EE6c098513'
    },
    {
      token: 'WBTC',
      address: '0x37131aEDd3da288467B6EBe9A77C523A700E6Ca1'
    },
    {
      token: 'GHST',
      address: '0xF086dEdf6a89e7B16145b03a6CB0C0a9979F1433'
    },
    {
      token: 'vGHST',
      address: '0x1F0aa72b980d65518e88841bA1dA075BD43fa933'
    },
    {
      token: 'camWMATIC',
      address: '0x88d84a85A87ED12B8f098e8953B322fF789fCD1a'
    },
    {
      token: 'camWETH',
      address: '0x11A33631a5B5349AF3F165d2B7901A4d67e561ad'
    },
    {
      token: 'camAAVE',
      address: '0x578375c3af7d61586c2C3A7BA87d2eEd640EFA40'
    },
    {
      token: 'camWBTC',
      address: '0x7dda5e1a389e0c1892caf55940f5fce6588a9ae0'
    },
    {
      token: 'camDAI',
      address: '0xD2FE44055b5C874feE029119f70336447c8e8827'
    },
    {
      token: 'Stake DAO USD Strategy',
      address: '0x57cbf36788113237d64e46f25a88855c3dff1691'
    },
    {
      token: 'Frax Share',
      address: '0xff2c44fb819757225a176e825255a01b3b8bb051'
    },
    {
      token: 'Celsius X Doge',
      address: '0x7CbF49E4214C7200AF986bc4aACF7bc79dd9C19a'
    },
    {
      token: 'Celsius X ADA',
      address: '0x506533B9C16eE2472A6BF37cc320aE45a0a24F11'
    },
    {
      token: 'Celsius X WETH',
      address: '0x7d36999a69f2b99bf3fb98866cbbe47af43696c8'
    }
  ],
  250: [
    {
      token: 'WFTM',
      address: '0x1066b8FC999c1eE94241344818486D5f944331A0'
    },
    {
      token: 'WETH',
      address: '0xD939c268C49c442F037E968F045ba02f499562D4'
    },
    {
      token: 'yvWFTM',
      address: '0x7efB260662a6FA95c1CE1092c53Ca23733202798'
    },
    {
      token: 'yvDAI',
      address: '0x682E473FcA490B0adFA7EfE94083C1E63f28F034'
    },
    {
      token: 'BTC',
      address: '0xE5996a2cB60eA57F03bf332b5ADC517035d8d094'
    },
    {
      token: 'LINK',
      address: '0xd6488d586E8Fcd53220e4804D767F19F5C846086'
    },
    {
      token: 'SUSHI',
      address: '0x267bDD1C19C932CE03c7A62BBe5b95375F9160A6'
    },
    {
      token: 'AAVE',
      address: '0xdB09908b82499CAdb9E6108444D5042f81569bD9'
    },
    {
      token: 'mooScreamFTM',
      address: '0x3609A304c6A41d87E895b9c1fd18c02ba989Ba90'
    },
    {
      token: 'mooScreamETH',
      address: '0xC1c7eF18ABC94013F6c58C6CdF9e829A48075b4e'
    },
    {
      token: 'mooScreamBTC',
      address: '0x5563Cc1ee23c4b17C861418cFF16641D46E12436'
    },
    {
      token: 'mooScreamLINK',
      address: '0x8e5e4D08485673770Ab372c05f95081BE0636Fa2'
    },
    {
      token: 'mooScreamDAI',
      address: '0xBf0ff8ac03f3E0DD7d8faA9b571ebA999a854146'
    },
    {
      token: 'mooBooBTC-FTM',
      address: '0xf34e271312e41bbd7c451b76af2af8339d6f16ed'
    },
    {
      token: 'mooBooETH-FTM',
      address: '0x9ba01b1279b1f7152b42aca69faf756029a9abde'
    },
    {
      token: 'mooBIFI',
      address: '0x75d4ab6843593c111eeb02ff07055009c836a1ef'
    }
  ],
  43114: [
    {
      token: 'mooAaveAVAX',
      address: '0xfA19c1d104F4AEfb8d5564f02B3AdCa1b515da58'
    },
    {
      token: 'Stake DAO USD Strategy',
      address: '0x13a7fe3ab741ea6301db8b164290be711f546a73'
    }
  ],
  1666600000: [
    {
      token: 'WETH',
      address: '0x46469f995A5CB60708200C25EaD3cF1667Ed36d6'
    },
    {
      token: 'WBTC',
      address: '0x9f4E3d01c634441F284beb92bBAEeb76133BbB28'
    }
  ],
  100: [
    {
      token: 'WETH',
      address: '0x5c49b268c9841AFF1Cc3B0a418ff5c3442eE3F3b'
    }
  ]
}
