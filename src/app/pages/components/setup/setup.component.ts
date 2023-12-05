import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {


  search: string = '';
  originalStacks = [
    {
      'title': 'Intelbras Power strip',
      'image': 'assets/images/setup/Filtro de Linha.png',
      'type': 'power strip',
      'link': 'https://www.amazon.com.br/Protetor-Eletr%C3%B4nico-Intelbras-EPE-1006/dp/B07DF4N4LQ/ref=pd_sbs_d_sccl_2_5/131-3344068-3484330?pd_rd_w=Wx8mv&content-id=amzn1.sym.a9d1777a-94a4-4781-9f82-ec1fa264372f&pf_rd_p=a9d1777a-94a4-4781-9f82-ec1fa264372f&pf_rd_r=HKQM3SZBDS8P2T5AE145&pd_rd_wg=M3IA5&pd_rd_r=bf6579a2-b070-4cca-984a-77e97583a3e5&pd_rd_i=B07DF4N4LQ&psc=1'
    },
    {
      'title': 'Monitor LG Ultrawide 29" (29WL500-29)',
      'image': 'assets/images/setup/Monitor LG.png',
      'type': 'monitor',
      'link': 'https://www.amazon.com.br/Monitor-LG-Ultrawide-29WL500-29-21/dp/B099NX3P3F/ref=sr_1_5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1EGIF1PO5F4EQ&keywords=monitor+lg+ultrawide&qid=1701744304&s=electronics&sprefix=monitor+lg+ultrawide%2Celectronics%2C203&sr=1-5&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147'
    },
    {
      'title': 'Monitor Acer 27"',
      'image': 'assets/images/setup/Monitor Acer 27.png',
      'type': 'monitor',
      'link': 'https://www.amazon.com.br/Monitor-Acer-V277-75Hz-Preto/dp/B08SCPS9TK/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=acer+monitor+27+%2275hz%5C%22+%22&qid=1701745866&s=computers&sr=1-3&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147'
    },
    {
      'title': 'ELG F80N',
      'image': 'assets/images/setup/ELG F80N.png',
      'type': 'suport',
      'link': 'https://www.amazon.com.br/Ergon%C3%B4mico-Articulado-Compacto-Retr%C3%A1til-Monitores/dp/B0765KZ264/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3MQ98X8W2PG1U&keywords=elg%2Bf80n&qid=1701744516&s=electronics&sprefix=elg%2Bf80n%2Celectronics%2C206&sr=1-1&ufe=app_do%3Aamzn1.fos.6a09f7ec-d911-4889-ad70-de8dd83c8a74&th=1'
    },
    {
      'title': 'HyperX Solocast',
      'image': 'assets/images/setup/HyperX Solocast.png',
      'type': 'microfone',
      'link': 'https://www.amazon.com.br/Microfone-HyperX-Solocast-USB-Compat%C3%ADvel/dp/B08KFL3SFV/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1N9ON6AAKQSG1&keywords=solocast&qid=1701744685&s=electronics&sprefix=solocas%2Celectronics%2C197&sr=1-1&ufe=app_do%3Aamzn1.fos.4bb5663b-6f7d-4772-84fa-7c7f565ec65b'
    },
    {
      'title': 'Suporte Mesa Articulado',
      'image': 'assets/images/setup/Suporte Mesa Articulado.png',
      'type': 'suport',
      'link': 'https://www.amazon.com.br/Pedestal-Suporte-Articulado-Microfone-Studio/dp/B07YL6MH8J/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=FKOVX4C1EU7K&keywords=Pedestal+Suporte+Mesa+Articulado+Para+Microfone&qid=1701744818&s=electronics&sprefix=pedestal+suporte+mesa+articulado+para+microfone%2Celectronics%2C210&sr=1-1'
    },
    {
      'title': 'QCY T20',
      'image': 'assets/images/setup/QCY T20.png',
      'type': 'earphone',
      'link': 'https://qcy.com.br/pages/shopt20'
    },
    {
      'title': 'MX Master 3S',
      'image': 'assets/images/setup/MX Master 3S.png',
      'type': 'mouse',
      'link': 'https://www.amazon.com.br/Logitech-MX-Master-3S-Superf%C3%ADcie/dp/B0B11LJ69K/ref=asc_df_B0B11LJ69K/?tag=googleshopp00-20&linkCode=df0&hvadid=379713309507&hvpos=&hvnetw=g&hvrand=17217047925103992340&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031432&hvtargid=pla-1679907604040&psc=1&mcid=344dd8b2961b35f8872a04657df5f817'
    },
    {
      'title': 'Redragon Lakshmi',
      'image': 'assets/images/setup/Redragon Lakshmi.png',
      'type': 'keyboard',
      'link': 'https://www.amazon.com.br/Teclado-Redragon-Lakshmi-Amarelo-Branco/dp/B0BN4M1CNS/ref=sr_1_6?crid=2TT5SMM2R1KZ4&keywords=redragon+lakshmi&qid=1701745311&s=computers&sprefix=redragon+la%2Ccomputers%2C222&sr=1-6&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d'
    },
    {
      'title': 'Felt mouse pad, 90x40cm',
      'image': 'assets/images/setup/Felt mouse pad.png',
      'type': 'mousepad',
      'link': 'https://www.amazon.com.br/Mousepad-Bullpad-Feltro-90x40cm-Antiderrapante/dp/B0CJ8HVZC5/ref=sr_1_9?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=BLA2P4HBCINY&keywords=mouse%2Bpad%2Bfeltro&qid=1701746012&s=computers&sprefix=mousepad%2Bfeltro%2Ccomputers%2C210&sr=1-9&th=1'
    },
    {
      'title': 'Echo Dot (3ª Geração)',
      'image': 'assets/images/setup/Echo Dot 3.png',
      'type': 'assistant',
      'link': 'https://www.amazon.com.br/Echo-Dot-3%C2%AA-Gera%C3%A7%C3%A3o-Cor-Preta/dp/B07PDHSJ1H/ref=cm_cr_arp_d_product_top?ie=UTF8'
    },
    {
      'title': 'Logitech C920s',
      'image': 'assets/images/setup/Logitech C920s.png',
      'type': 'webcam',
      'link': 'https://www.amazon.com.br/C%C3%A2mera-webcam-Logitech-Webcams-Equipamentos/dp/B07K986YLL/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1ST6AL4S5ZJ24&keywords=logitech+cam&qid=1701745643&sprefix=logitech+cam%2Caps%2C228&sr=8-3&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147'
    },
  ];
  stacks = [...this.originalStacks];

  constructor() { }

  ngOnInit() {
  }

  searchbar() {
    this.stacks = this.originalStacks.filter((project) => {
      return project.title.toLowerCase().includes(this.search.toLowerCase());
    });
  }

}
