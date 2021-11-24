import { BolsasMochilaComponent } from './views/bolsas-mochila/bolsas-mochila.component';
import { CortaVentoComponent } from './views/corta-vento/corta-vento.component';
import { CamisetasTimeComponent } from './views/camisetas-time/camisetas-time.component';
import { ShortsComponent } from './views/shorts/shorts.component';
import { BolaComponent } from './views/bola/bola.component';
import { JordanComponent } from './views/jordan/jordan.component';
import { JaquetaMoletonsComponent } from './views/jaqueta-moletons/jaqueta-moletons.component';
import { BonesComponent } from './views/bones/bones.component';
import { CamisetasComponent } from './views/camisetas/camisetas.component';
import { TenisComponent } from './views/tenis/tenis.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  {path: "home",component: HomeComponent},
  {path: "Tenis", component: TenisComponent, children:[
    {path:"Tênis_Nike_Air_Force_1_07_LV8", component: TenisComponent},
    {path:"Tênis_Nike_Air_Force_1_07_PRM_COR_1",component: TenisComponent},
    {path:"Tênis_Nike_Air_Force_1_Crater_COR_1",component: TenisComponent},
    {path:"Tênis_Nike_Air_Force_1_07_COR_1",component: TenisComponent},
    {path:"Tênis_Nike_Air_Max_90_COR_1",component: TenisComponent},
    {path:"Tenis_Nike_Air_Force_1_07_PRM_COR_2",component: TenisComponent},
    {path:"Tênis_Nike_Air_Force_1_Crater_COR_2",component: TenisComponent},
    {path:"Tênis_Nike_Air_Force_1_07_COR_2",component: TenisComponent},
    {path:"Tênis_Nike_Air_Max_90_COR_2",component: TenisComponent},
    {path:"Tênis_Nike_Air_Max_95_Essential",component: TenisComponent},
    {path:"Tênis_Nike_Court_Royale_2_Low",component: TenisComponent},
    {path:"Tênis_Nike_Air_Max_SC",component: TenisComponent},
    {path:"Tênis_Nike_Court_Legacy",component: TenisComponent},
    {path:"Tênis_Nike_KD14_Unissex",component: TenisComponent},
    {path:"Tênis_Nike_SB_Zoom_Stefan",component: TenisComponent},
    {path:"Tênis_Nike_PG_5_Unissex",component: TenisComponent},
    {path:"Tênis_Jordan_Delta_2_Masculino",component: TenisComponent},
    {path:"Tênis_Nike_Air_Max_Infinity_2",component: TenisComponent},
    {path:"Tênis_Nike_Air_Max_Impact_2",component: TenisComponent},
    {path:"Tênis_Nike_Air_Max_2021",component: TenisComponent},
    {path:"Tênis_Nike_LeBron_Witness_5",component: TenisComponent},
    {path:"Tênis_Nike_LeBron_Witness_6",component: TenisComponent},
    {path:"Tênis_Nike_Dunk_High_SE",component: TenisComponent},
    {path:"Tênis_Nike_AF_1_1_Masculino",component: TenisComponent},
    {path:"Tênis_Nike_Air_Max_90_cor_3 ",component: TenisComponent},
    {path:"Tênis_Nike_Air_Force_1_07_br_cor_3",component: TenisComponent},
    {path:"Tênis_Nike_AF1_1_Masculino",component: TenisComponent},
    {path:"Tênis_Nike_SB_Zoom_Blazer_Mid",component: TenisComponent},
    {path:"Tênis_Jordan_MA2_Masculino",component: TenisComponent},
    {path:"Tênis_Nike_Blazer_Mid_77",component: TenisComponent},
  ]},
  {path: "Camisetas", component: CamisetasComponent, children:[
    {path:"Camiseta_Nike_SB_Masculina_COR_1", component:CamisetasComponent},
    {path:"Camiseta_Nike_SB_Masculina_COR_2", component:CamisetasComponent},
    {path:"Camiseta_Nike_SB_Masculina_COR_3", component:CamisetasComponent},
    {path:"Camiseta_Nike_Team_br_Kenya_Dri_FIT_Masculina", component:CamisetasComponent},
    {path:"Camiseta_Nike_Team_Kenya", component:CamisetasComponent},
    {path:"Regata_Nike_Kenya_Masculina", component:CamisetasComponent},
    {path:"Camiseta_Nike_Dri_FIT_Mixed_Relays_Masculina", component:CamisetasComponent},
    {path:"Camiseta_Nike_Team_USA_Rise_365_Masculino", component:CamisetasComponent},
    {path:"Regata_Nike_USA_Masculina", component:CamisetasComponent},
    {path:"Regata_Nike_AeroSwift_Masculina", component:CamisetasComponent},
    {path:"Camiseta_Nike_Sportswear_Club_Masculina", component:CamisetasComponent},
    {path:"Camiseta_Nike_Masculina", component:CamisetasComponent},
    {path:"Camiseta_Nike_AeroSwift_Masculina", component:CamisetasComponent},
    {path:"Camiseta_Nike_Dri_FIT_Rise_365_Masculina_1", component:CamisetasComponent},
    {path:"Camiseta_Nike_Dri_FIT_Rise_365_Masculina_2", component:CamisetasComponent},
    {path:"Camiseta_Nike_Dri_FIT_Rise_365_Masculina_3", component:CamisetasComponent},
    {path:"Camisa_Nike_Corinthians_I_2020_21_Jogador_Masculina", component:CamisetasComponent},
    {path:"Camisa_Nike_Red_Bull_Bragantino_IV_2021_22_Torcedor_Unissex", component:CamisetasComponent},
    {path:"Camiseta_Nike_Dri_FIT_Wild_Run_Miler_Masculina_COR_1", component:CamisetasComponent},
    {path:"Camiseta_Nike_Dri_FIT_Wild_Run_Miler_Masculina_COR_2", component:CamisetasComponent},
    {path:"Camiseta_Nike_Dri_FIT_Wild_Run_Masculina", component:CamisetasComponent},
    {path:"Camiseta_Nike_Dri_FIT_Wild_Run_Miler_Masculina_COR_3", component:CamisetasComponent},
    {path:"Camiseta_Nike_Dri_FIT_Wild_Run_Miler_Masculina_COR_4", component:CamisetasComponent},
    {path:"Camiseta_NikeLab_Essentials_Solo_Swoosh_Masculina_COR_1", component:CamisetasComponent},
    {path:"Camiseta_NikeLab_Essentials_Solo_Swoosh_Masculina_COR_2", component:CamisetasComponent},
    {path:"Camiseta_NikeLab_Essentials_Solo_Swoosh_Masculina_COR_3", component:CamisetasComponent},
    {path:"Regata_Nike_Kyrie_Irving_Nets_Icon_Edition_2020_Masculina", component:CamisetasComponent},
    {path:"Regata_Nike_Giannis_Antetokounmpo_Bucks_Icon_Edition_2020_Masculina", component:CamisetasComponent},
    {path:"Regata_Jordan_Los_Angeles_Lakers_Statement_Edition_2020_Masculina", component:CamisetasComponent},
    {path:"Regata_Nike_Luka_Doncic_Mavericks_Icon_Edition_2020", component:CamisetasComponent}    
  ]},
  {path: "Bones", component: BonesComponent, children:[
    {path:"Chapeu_NikeLab_Essentials",component:BonesComponent},
    {path:"Bone_Jordan_Jumpman_Pro",component:BonesComponent},
    {path:"Bone_Nike_Court_AeroBill_Rafa",component:BonesComponent},
    {path:"Bone_Nike_Sportswear_Heritage",component:BonesComponent},
    {path:"Bone_Jordan_Jordan_Sport_DNA",component:BonesComponent},
    {path:"Bone_Nike_AeroBill_Tailwind",component:BonesComponent},
    {path:"Bone_Nike_Court_Heritage86",component:BonesComponent},
    {path:"Bone_Jordan_Pro_Jumpan",component:BonesComponent},
    {path:"Bone_Nike_SB_Heritage86",component:BonesComponent},
    {path:"Bone_Nike_Sportswear_Futura",component:BonesComponent},
    {path:"Bone_Nike_FC_Barcelona",component:BonesComponent},
    {path:"Chapeu_Nike_Sportswear",component:BonesComponent},
    {path:"Bone_NikeCourt_AeroBill",component:BonesComponent},
    {path:"Bone_Nike_PSG_Heritage86",component:BonesComponent},
    {path:"Bone_Nike_Corinthians_1",component:BonesComponent},
    {path:"Bone_Nike_Liverpool_FC",component:BonesComponent},
    {path:"Bone_LeBron_Heritage86",component:BonesComponent},
    {path:"Bone_Nike_SB_Team_USA",component:BonesComponent},
    {path:"Bone_Nike_Sportswear_Pro",component:BonesComponent},
    {path:"Bone_Jordan_Jumpman",component:BonesComponent},
    {path:"Bone_Nike_Dri_FIT_Pro_Unissex",component:BonesComponent},
    {path:"Bone_Jordan_Jumpman",component:BonesComponent},
    {path:"Bone_Nike_SB_Unissex",component:BonesComponent},
    {path:"Bone_Nike_Corinthians_2",component:BonesComponent},
  ]},
  {path: "Jaqueta", component: JaquetaMoletonsComponent, children:[
    {path:"Blusao_Nike_Sportswear_Club_Crew_Masculino",component:JaquetaMoletonsComponent},
    {path:"Blusao_Jordan_Jumpman_Masculino", component:JaquetaMoletonsComponent},
    {path:"Blusao_Nike_Sportswear_Masculino", component:JaquetaMoletonsComponent}
  ]},
  {path: "Jordan", component: JordanComponent, children:[
    {path:"Camiseta_Jordan_Sport_DNA_Masculina", component:JordanComponent},
    {path:"Shorts_Jordan_Sport_DNA_Masculino", component:JordanComponent},
    {path:"Blusao_Jordan_Sport_DNA_Masculino", component:JordanComponent}
  ]},
  {path:"Bola", component:BolaComponent,children:[
    {path:"Bola_Nike_Futsal_Pro", component: BolaComponent},
    {path:"Bola_Nike_Futsal_Maestro", component: BolaComponent},
    {path:"Bola_Nike_Premier_League_Strike", component: BolaComponent}
  ]},
  {path:"Shorts",component:ShortsComponent, children:[
    {path:"Shorts_Nike_Dri_FIT_Run_Division_Flex_Stride_Masculino", component: ShortsComponent},
    {path:"Shorts_Nike_Dri_FIT_Wild_Run_Challenger_Masculino", component: ShortsComponent},
    {path:"Shorts_Nike_Dri_FIT_Wild_Run_Flex_Stride_Masculino", component: ShortsComponent}
  ]},
  {path:"CamisetasTime",component:CamisetasTimeComponent, children:[
    {path:"Camiseta_Nike_PSG_Masculina", component:CamisetasTimeComponent},
    {path:"Camiseta_Liverpool_FC_Strike_Masculina", component:CamisetasTimeComponent},
    {path:"Camiseta_FC_Barcelona_Strike_Masculina", component:CamisetasTimeComponent}
  ]},
  {path:"CortaVento",component: CortaVentoComponent, children:[
    {path:"Jaqueta_Nike_Sportswear_Essentials_Windrunner",component:CortaVentoComponent},
    {path:"Jaqueta_Nike_Sportswear_Windrunner_Masculina",component:CortaVentoComponent},
    {path:"Jaqueta_Nike_Corinthians_Windrunner_Masculina",component:CortaVentoComponent},
    {path:"Jaqueta_Nike_x_Gyakusou_Masculina",component:CortaVentoComponent},
    {path:"Jaqueta_Nike_Windrunner_Masculina",component:CortaVentoComponent}
  ]},
  {path:"BolsasMochila",component:BolsasMochilaComponent, children:[
    {path:"Mochila_Nike_Elemental_Unissex",component:BolsasMochilaComponent},
    {path:"Bolsa_Nike_Brasilia_Unissex",component:BolsasMochilaComponent},
    {path:"Mochila_Nike_Brasilia_Unissex",component:BolsasMochilaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
