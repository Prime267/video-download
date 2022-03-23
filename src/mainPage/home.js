import React, {useState, useEffect} from 'react';
import useScript from '../hooks/useScript';
import {languages} from '../languages';

const Home = () => {
    const [language, setLanguage] = useState("en");

    useScript("/scripts.js", language);

    const handleLanguage = (language) => (event) => {
        setLanguage(language);
    };

    return (
        <div id="allrecords" className="t-records" data-hook="blocks-collection-content-node" data-tilda-project-id="2629667"
      data-tilda-page-id="16383787" data-tilda-formskey="b33f8f30d49b43b2fa3ef41c06a8862f" data-tilda-project-lang="EN">
      <div id="rec267196377" className="r t-rec" data-animationappear="off" data-record-type="396">
        <div class='t396'>
          <div className="t396__artboard" data-artboard-recid="267196377" data-artboard-height="80"
            data-artboard-height-res-320="50" data-artboard-height_vh="" data-artboard-valign="center"
            data-artboard-upscale="grid" data-artboard-ovrflw="">
            <div className="t396__carrier" data-artboard-recid="267196377"></div>
            <div className="t396__filter" data-artboard-recid="267196377"></div>
            <div class='t396__elem tn-elem tn-elem__2671963771610472277071' data-elem-id='1610472277071'
              data-elem-type='image' data-field-top-value="1" data-field-top-res-960-value="2"
              data-field-top-res-640-value="1" data-field-top-res-480-value="1" data-field-top-res-320-value="0"
              data-field-left-value="120" data-field-left-res-960-value="102" data-field-left-res-640-value="30"
              data-field-left-res-480-value="31" data-field-left-res-320-value="11" data-field-width-value="140"
              data-field-width-res-320-value="80" data-field-axisy-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="left"
              data-field-axisx-res-320-value="left" data-field-container-value="window" data-field-topunits-value="px"
              data-field-leftunits-value="px" data-field-heightunits-value="" data-field-widthunits-value="px"
              data-field-filewidth-value="871" data-field-fileheight-value="335">
                <div class='tn-atom'>
                  <img class='tn-atom__img'
                  src='https://static.tildacdn.com/tild6430-6435-4364-b431-346639363334/logo_white.png'
                  imgfield='tn_img_1610472277071' />
                </div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2671963771610474238476' data-elem-id='1610474238476'
              data-elem-type='shape' data-field-top-value="0" data-field-top-res-320-value="0" data-field-left-value="0"
              data-field-left-res-320-value="0" data-field-height-value="80" data-field-height-res-320-value="50"
              data-field-width-value="3000" data-field-width-res-320-value="1900" data-field-axisy-value="top"
              data-field-axisx-value="center" data-field-container-value="window" data-field-topunits-value="px"
              data-field-leftunits-value="px" data-field-heightunits-value="px" data-field-widthunits-value="px"
              data-animate-sbs-event="scroll" data-animate-sbs-trg="1" data-animate-sbs-trgofst="0"
              data-animate-sbs-opts="[{'di':'0','mx':'0','my':'0','sx':'1','sy':'1','op':'1','ro':'0','bl':'0','fi':'','dd':'0'},{'di':300,'mx':'0','my':'0','sx':'1','sy':'1','op':0.7,'ro':'0','bl':'0','fi':'','dd':'0'}]"
              data-field-lazyoff-value="y">
              <div class='tn-atom'> </div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2671963771610543260505' data-elem-id='1610543260505'
              data-elem-type='button' data-field-top-value="0" data-field-top-res-960-value="0"
              data-field-top-res-640-value="0" data-field-top-res-480-value="-127" data-field-top-res-320-value="-102"
              data-field-left-value="-220" data-field-left-res-960-value="-122" data-field-left-res-640-value="-90"
              data-field-left-res-480-value="-120" data-field-left-res-320-value="210" data-field-height-value="46"
              data-field-width-value="180" data-field-axisy-value="center" data-field-axisx-value="right"
              data-field-container-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value=""> <a class='tn-atom' href="#contacts">{languages[language].btnStarted}</a> </div>
            <div class='t396__elem tn-elem tn-elem__2671963771610635643734' data-elem-id='1610635643734'
              data-elem-type='shape' data-field-top-value="-68" data-field-left-value="-40" data-field-height-value="40"
              data-field-width-value="40" data-field-axisy-value="center" data-field-axisx-value="right"
              data-field-container-value="grid" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="px" data-field-widthunits-value="px"> <a class='tn-atom'
                href="#submenu:more">
              </a> </div>
            <div class='t396__elem tn-elem tn-elem__2671963771611159758742' data-elem-id='1611159758742'
              data-elem-type='button' data-field-top-value="1" data-field-top-res-960-value="1"
              data-field-top-res-640-value="1" data-field-top-res-480-value="1" data-field-top-res-320-value="0"
              data-field-left-value="-157" data-field-left-res-960-value="-69" data-field-left-res-640-value="-37"
              data-field-left-res-480-value="-45" data-field-left-res-320-value="-20" data-field-height-value="35"
              data-field-width-value="33" data-field-axisy-value="center" data-field-axisy-res-320-value="center"
              data-field-axisx-value="right" data-field-container-value="window" data-field-topunits-value="px"
              data-field-leftunits-value="px" data-field-heightunits-value="" data-field-widthunits-value=""> <a
                class='tn-atom' href="#submenu:more">EN</a> </div>
          </div>
        </div>
      </div>
      <div id="rec268881457" className="r t-rec" data-animationappear="off" data-record-type="131">
        <div className="t123">
          <div className="t-container_100 ">
            <div className="t-width t-width_100 ">
            </div>
          </div>
        </div>
      </div>
      <div id="rec271924648" className="r t-rec" data-animationappear="off" data-record-type="131">
        <div className="t123">
          <div className="t-container_100 ">
            <div className="t-width t-width_100 ">
              <link rel="alternate" hreflang="ua" href="https://twistrobotics.com/ua" />
              <link rel="alternate" hreflang="de" href="https://twistrobotics.com/de" />
              <link rel="alternate" hreflang="pl" href="https://twistrobotics.com/pl" />
              <link rel="alternate" hreflang="en" href="https://twistrobotics.com" />
            </div>
          </div>
        </div>
      </div>
      <div id="rec269772248" className="r t-rec" data-animationappear="off" data-record-type="794">
        <div className="t794" data-tooltip-hook="#submenu:more" data-tooltip-margin="15px" data-add-arrow="on">
          <div className="t794__tooltip-menu">
            <div className="t794__content">
              <ul className="t794__list">
                <li className="t794__list_item t-name t-name_xs"><a className="t794__typo t-name t-name_xs"
                    href="#en" data-menu-item-number="1" onClick={handleLanguage("en")}>EN</a></li>
                <li className="t794__list_item t-name t-name_xs"><a className="t794__typo t-name t-name_xs"
                    href="#de" data-menu-item-number="2" onClick={handleLanguage("de")}>DE</a></li>
                <li className="t794__list_item t-name t-name_xs"><a className="t794__typo t-name t-name_xs"
                    href="#pl" data-menu-item-number="3" onClick={handleLanguage("pl")}>PL</a></li>
                <li className="t794__list_item t-name t-name_xs"><a className="t794__typo t-name t-name_xs"
                    href="#ua" data-menu-item-number="4" onClick={handleLanguage("ua")}>UA</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="rec268984801" className="r t-rec" data-animationappear="off" data-record-type="826">
        <div className="t826" data-galaxy-rec-ids="269279419" data-element-spread="" data-element-color="#ffffff"
          data-element-opacity="1" data-galaxy-whole-page="yes" style={{display:"table", width:"100%"}}>
          <div className="t826__animation">
            <div data-galaxy-id="268984801" className="t826__galaxy"
              style={{backgroundImage: "-moz-linear-gradient(top, rgba(,0.70), rgba(,0.70))", backgroundImage: "-webkit-linear-gradient(top, rgba(,0.70), rgba(,0.70))", backgroundImage: "-o-linear-gradient(top, rgba(,0.70), rgba(,0.70))", backgroundImage: "-ms-linear-gradient(top, rgba(,0.70), rgba(,0.70))", backgroundImage: "linear-gradient(top, rgba(,0.70), rgba(,0.70))", filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#4c', endColorstr='#4c')"}}>
              <div className="t826__galaxy-wrapper">
                <div className="t826__galaxy-far"></div>
                <div className="t826__galaxy-mid"></div>
                <div className="t826__galaxy-near"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="rec269279419" className="r t-rec" data-animationappear="off" data-record-type="396">
        <div class='t396'>
          <div className="t396__artboard" data-artboard-recid="269279419" data-artboard-height="550"
            data-artboard-height-res-960="680" data-artboard-height-res-640="800" data-artboard-height-res-480="750"
            data-artboard-height-res-320="1230" data-artboard-height_vh="100" data-artboard-height_vh-res-960="100"
            data-artboard-height_vh-res-640="100" data-artboard-height_vh-res-480="100"
            data-artboard-height_vh-res-320="100" data-artboard-valign="center" data-artboard-upscale=""
            data-artboard-ovrflw="">
            <div className="t396__carrier-wrapper">
              <div className="t396__carrier" data-artboard-recid="269279419"></div>
            </div>
            <div className="t396__filter" data-artboard-recid="269279419"></div>
            <div class='t396__elem tn-elem tn-elem__2692794191470209944682' data-elem-id='1470209944682'
              data-elem-type='text' data-field-top-value="-278" data-field-top-res-960-value="-288"
              data-field-top-res-640-value="105" data-field-top-res-480-value="65" data-field-top-res-320-value="50"
              data-field-left-value="0" data-field-left-res-960-value="5" data-field-left-res-640-value="0"
              data-field-left-res-480-value="0" data-field-left-res-320-value="0" data-field-width-value="1030"
              data-field-width-res-960-value="810" data-field-width-res-640-value="590"
              data-field-width-res-480-value="460" data-field-width-res-320-value="300" data-field-axisy-value="center"
              data-field-axisy-res-640-value="top" data-field-axisy-res-320-value="top" data-field-axisx-value="center"
              data-field-axisx-res-320-value="center" data-field-container-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px">
              <div class='tn-atom' field='tn_text_1470209944682'>{languages[language].header1}</div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2692794191470210011265' data-elem-id='1470210011265'
              data-elem-type='text' data-field-top-value="-77" data-field-top-res-960-value="-72"
              data-field-top-res-640-value="160" data-field-top-res-480-value="123" data-field-top-res-320-value="144"
              data-field-left-value="0" data-field-left-res-960-value="10" data-field-left-res-640-value="0"
              data-field-left-res-480-value="0" data-field-left-res-320-value="0" data-field-width-value="880"
              data-field-width-res-960-value="660" data-field-width-res-640-value="560"
              data-field-width-res-480-value="460" data-field-width-res-320-value="300" data-field-axisy-value="center"
              data-field-axisy-res-640-value="top" data-field-axisx-value="center" data-field-container-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px">
              <div class='tn-atom' field='tn_text_1470210011265'>{languages[language].text1}<br /><br />
              {languages[language].text2}<br /><br />
              {languages[language].text3}</div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2692794191610458179546' data-elem-id='1610458179546'
              data-elem-type='button' data-field-top-value="128" data-field-top-res-960-value="113"
              data-field-top-res-640-value="555" data-field-top-res-480-value="402" data-field-top-res-320-value="159"
              data-field-left-value="0" data-field-left-res-960-value="0" data-field-left-res-640-value="-10"
              data-field-left-res-480-value="-10" data-field-left-res-320-value="0" data-field-height-value="46"
              data-field-width-value="180" data-field-axisy-value="center" data-field-axisy-res-960-value="center"
              data-field-axisy-res-640-value="top" data-field-axisy-res-320-value="center"
              data-field-axisx-value="center" data-field-axisx-res-960-value="center"
              data-field-axisx-res-320-value="center" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-320-value="window"
              data-field-topunits-value="px" data-field-leftunits-value="px" data-field-heightunits-value=""
              data-field-widthunits-value=""> 
              <a class='tn-atom' href="#contacts">{languages[language].btnStarted}</a> 
            </div>
            <div class='t396__elem tn-elem tn-elem__2692794191610559556942' data-elem-id='1610559556942'
              data-elem-type='image' data-field-top-value="229" data-field-top-res-960-value="-138"
              data-field-top-res-640-value="267" data-field-top-res-480-value="275" data-field-top-res-320-value="507"
              data-field-left-value="360" data-field-left-res-960-value="340" data-field-left-res-640-value="251"
              data-field-left-res-480-value="112" data-field-left-res-320-value="-80" data-field-width-value="50"
              data-field-width-res-640-value="40" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-960-value="center" data-field-axisx-res-640-value="center"
              data-field-axisx-res-320-value="right" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px" data-field-filewidth-value="62"
              data-field-fileheight-value="67">
              <div class='tn-atom'> <img class='tn-atom__img'
                  src='https://static.tildacdn.com/tild6431-6438-4434-b037-376330396339/noun_Checklist_63435.svg'
                  imgfield='tn_img_1610559556942' /> </div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2692794191610559556952' data-elem-id='1610559556952'
              data-elem-type='image' data-field-top-value="223" data-field-top-res-960-value="-143"
              data-field-top-res-640-value="265" data-field-top-res-480-value="159" data-field-top-res-320-value="388"
              data-field-left-value="-66" data-field-left-res-960-value="-70" data-field-left-res-640-value="-50"
              data-field-left-res-480-value="112" data-field-left-res-320-value="80" data-field-width-value="50"
              data-field-width-res-640-value="40" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-960-value="center" data-field-axisx-res-640-value="center"
              data-field-axisx-res-320-value="left" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px" data-field-filewidth-value="63"
              data-field-fileheight-value="62">
              <div class='tn-atom'> <img class='tn-atom__img'
                  src='https://static.tildacdn.com/tild3037-3363-4631-a663-386165383261/Shape.svg'
                  imgfield='tn_img_1610559556952' /> </div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2692794191610559556963' data-elem-id='1610559556963'
              data-elem-type='image' data-field-top-value="228" data-field-top-res-960-value="-134"
              data-field-top-res-640-value="269" data-field-top-res-480-value="277" data-field-top-res-320-value="505"
              data-field-left-value="218" data-field-left-res-960-value="194" data-field-left-res-640-value="149"
              data-field-left-res-480-value="1" data-field-left-res-320-value="80" data-field-width-value="50"
              data-field-width-res-640-value="40" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-960-value="center" data-field-axisx-res-640-value="center"
              data-field-axisx-res-320-value="left" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px" data-field-filewidth-value="58"
              data-field-fileheight-value="68">
              <div class='tn-atom'> <img class='tn-atom__img'
                  src='https://static.tildacdn.com/tild6235-3161-4135-b964-623233623332/noun_sparks_969639.svg'
                  imgfield='tn_img_1610559556963' /> </div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2692794191610559556974' data-elem-id='1610559556974'
              data-elem-type='image' data-field-top-value="223" data-field-top-res-960-value="-143"
              data-field-top-res-640-value="265" data-field-top-res-480-value="159" data-field-top-res-320-value="260"
              data-field-left-value="-208" data-field-left-res-960-value="-202" data-field-left-res-640-value="-152"
              data-field-left-res-480-value="3" data-field-left-res-320-value="-80" data-field-width-value="50"
              data-field-width-res-640-value="40" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-960-value="center" data-field-axisx-res-640-value="center"
              data-field-axisx-res-320-value="right" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px" data-field-filewidth-value="74"
              data-field-fileheight-value="73">
              <div class='tn-atom'> <img class='tn-atom__img'
                  src='https://static.tildacdn.com/tild6438-6531-4633-a466-393764363663/noun_cloud_data_proc.svg'
                  imgfield='tn_img_1610559556974' /> </div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2692794191610559556985' data-elem-id='1610559556985'
              data-elem-type='image' data-field-top-value="220" data-field-top-res-960-value="-155"
              data-field-top-res-640-value="261" data-field-top-res-480-value="269" data-field-top-res-320-value="384"
              data-field-left-value="81" data-field-left-res-960-value="62" data-field-left-res-640-value="52"
              data-field-left-res-480-value="-116" data-field-left-res-320-value="-75" data-field-width-value="60"
              data-field-width-res-640-value="50" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-960-value="center" data-field-axisx-res-640-value="center"
              data-field-axisx-res-320-value="right" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px" data-field-filewidth-value="84"
              data-field-fileheight-value="51">
              <div class='tn-atom'> <img class='tn-atom__img'
                  src='https://static.tildacdn.com/tild3333-3562-4238-b131-323631616162/noun_script_1907447.svg'
                  imgfield='tn_img_1610559556985' /> </div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2692794191610559556994' data-elem-id='1610559556994'
              data-elem-type='text' data-field-top-value="294" data-field-top-res-960-value="-68"
              data-field-top-res-640-value="318" data-field-top-res-480-value="213" data-field-top-res-320-value="322"
              data-field-left-value="-360" data-field-left-res-960-value="-349" data-field-left-res-640-value="-259"
              data-field-left-res-480-value="-109" data-field-left-res-320-value="35" data-field-width-value="130"
              data-field-width-res-640-value="100" data-field-width-res-480-value="100"
              data-field-width-res-320-value="130" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-320-value="left" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px">
              <div class='tn-atom' field='tn_text_1610559556994'>{languages[language].camera}<br />{languages[language].camera2}</div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2692794191610559557091' data-elem-id='1610559557091'
              data-elem-type='image' data-field-top-value="220" data-field-top-res-960-value="-149"
              data-field-top-res-640-value="263" data-field-top-res-480-value="157" data-field-top-res-320-value="258"
              data-field-left-value="-360" data-field-left-res-960-value="-349" data-field-left-res-640-value="-259"
              data-field-left-res-480-value="-109" data-field-left-res-320-value="80" data-field-width-value="50"
              data-field-width-res-640-value="40" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-960-value="center" data-field-axisx-res-640-value="center"
              data-field-axisx-res-320-value="left" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px" data-field-filewidth-value="71"
              data-field-fileheight-value="61">
              <div class='tn-atom'> <img class='tn-atom__img'
                  src='https://static.tildacdn.com/tild3236-3261-4933-b234-333133313236/noun_CCTV_3674892.svg'
                  imgfield='tn_img_1610559557091' /> </div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2692794191610562326019' data-elem-id='1610562326019'
              data-elem-type='text' data-field-top-value="294" data-field-top-res-960-value="-68"
              data-field-top-res-640-value="318" data-field-top-res-480-value="213" data-field-top-res-320-value="322"
              data-field-left-value="-208" data-field-left-res-960-value="-202" data-field-left-res-640-value="-152"
              data-field-left-res-480-value="3" data-field-left-res-320-value="-35" data-field-width-value="110"
              data-field-width-res-960-value="120" data-field-width-res-640-value="90"
              data-field-width-res-480-value="90" data-field-width-res-320-value="130" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-320-value="right" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px">
              <div class='tn-atom' field='tn_text_1610562326019'>{languages[language].cloud}<br />{languages[language].cloud2}</div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2692794191610562332418' data-elem-id='1610562332418'
              data-elem-type='text' data-field-top-value="294" data-field-top-res-960-value="-98"
              data-field-top-res-640-value="318" data-field-top-res-480-value="214" data-field-top-res-320-value="432"
              data-field-left-value="-66" data-field-left-res-960-value="-70" data-field-left-res-640-value="-50"
              data-field-left-res-480-value="112" data-field-left-res-320-value="35" data-field-width-value="110"
              data-field-width-res-960-value="100" data-field-width-res-640-value="90"
              data-field-width-res-480-value="80" data-field-width-res-320-value="130" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-320-value="left" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px">
              <div class='tn-atom' field='tn_text_1610562332418'>{languages[language].analysis}</div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2692794191610562340424' data-elem-id='1610562340424'
              data-elem-type='text' data-field-top-value="294" data-field-top-res-960-value="-68"
              data-field-top-res-640-value="318" data-field-top-res-480-value="326" data-field-top-res-320-value="444"
              data-field-left-value="81" data-field-left-res-960-value="62" data-field-left-res-640-value="52"
              data-field-left-res-480-value="-116" data-field-left-res-320-value="-35" data-field-width-value="120"
              data-field-width-res-960-value="120" data-field-width-res-640-value="90"
              data-field-width-res-480-value="90" data-field-width-res-320-value="130" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-320-value="right" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px">
              <div class='tn-atom' field='tn_text_1610562340424'>{languages[language].automation}<br />{languages[language].design}</div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2692794191610562346108' data-elem-id='1610562346108'
              data-elem-type='text' data-field-top-value="294" data-field-top-res-960-value="-98"
              data-field-top-res-640-value="318" data-field-top-res-480-value="327" data-field-top-res-320-value="561"
              data-field-left-value="218" data-field-left-res-960-value="194" data-field-left-res-640-value="149"
              data-field-left-res-480-value="112" data-field-left-res-320-value="35" data-field-width-value="90"
              data-field-width-res-960-value="100" data-field-width-res-640-value="80"
              data-field-width-res-480-value="80" data-field-width-res-320-value="130" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-320-value="left" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px">
              <div class='tn-atom' field='tn_text_1610562346108'>{languages[language].insights}</div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2692794191610562355002' data-elem-id='1610562355002'
              data-elem-type='text' data-field-top-value="294" data-field-top-res-960-value="-98"
              data-field-top-res-640-value="318" data-field-top-res-480-value="327" data-field-top-res-320-value="561"
              data-field-left-value="360" data-field-left-res-960-value="340" data-field-left-res-640-value="251"
              data-field-left-res-480-value="1" data-field-left-res-320-value="-35" data-field-width-value="130"
              data-field-width-res-960-value="148" data-field-width-res-640-value="100"
              data-field-width-res-480-value="110" data-field-width-res-320-value="130" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-320-value="right" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px">
              <div class='tn-atom' field='tn_text_1610562355002'>{languages[language].requirements}</div>
            </div>
          </div>
        </div>
      </div>
      <div id="rec269614815" className="r t-rec" data-animationappear="off" data-record-type="826">
        <div className="t826" data-galaxy-rec-ids="269487230" data-element-spread="" data-element-color="#ffffff"
          data-element-opacity="1" data-galaxy-whole-page="yes" style={{display: "table", width: "100%"}}>
          <div className="t826__animation">
            <div data-galaxy-id="269614815" className="t826__galaxy"
              style={{backgroundImage: "-moz-linear-gradient(top, rgba(,0.70), rgba(,0.70))", backgroundImage: "-webkit-linear-gradient(top, rgba(,0.70), rgba(,0.70))", backgroundImage: "-o-linear-gradient(top, rgba(,0.70), rgba(,0.70))", backgroundImage: "-ms-linear-gradient(top, rgba(,0.70), rgba(,0.70))", backgroundImage: "linear-gradient(top, rgba(,0.70), rgba(,0.70))", filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr='#4c', endColorstr='#4c')"}}>
              <div className="t826__galaxy-wrapper">
                <div className="t826__galaxy-far"></div>
                <div className="t826__galaxy-mid"></div>
                <div className="t826__galaxy-near"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="rec268909498" className="r t-rec" data-animationappear="off" data-record-type="396">
        <div class='t396'>
          <div className="t396__artboard" data-artboard-recid="268909498" data-artboard-height="720"
            data-artboard-height-res-960="670" data-artboard-height-res-640="1010" data-artboard-height-res-320="1730"
            data-artboard-height_vh="" data-artboard-valign="center" data-artboard-upscale="" data-artboard-ovrflw="">
            <div className="t396__carrier" data-artboard-recid="268909498"></div>
            <div className="t396__filter" data-artboard-recid="268909498"></div>
            <div class='t396__elem tn-elem tn-elem__2689094981610460253583' data-elem-id='1610460253583'
              data-elem-type='text' data-field-top-value="154" data-field-top-res-960-value="65"
              data-field-top-res-640-value="65" data-field-top-res-480-value="668" data-field-top-res-320-value="35"
              data-field-left-value="81" data-field-left-res-960-value="232" data-field-left-res-640-value="0"
              data-field-left-res-480-value="11" data-field-left-res-320-value="0" data-field-width-value="340"
              data-field-width-res-960-value="560" data-field-width-res-640-value="580"
              data-field-width-res-480-value="460" data-field-width-res-320-value="300" data-field-axisy-value="top"
              data-field-axisx-value="left" data-field-axisx-res-640-value="center"
              data-field-axisx-res-320-value="center" data-field-container-value="grid"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px">
              <div class='tn-atom' field='tn_text_1610460253583'><strong>{languages[language].header2}</strong></div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2689094981610460253588' data-elem-id='1610460253588'
              data-elem-type='text' data-field-top-value="268" data-field-top-res-960-value="-136"
              data-field-top-res-640-value="-86" data-field-top-res-480-value="740px" data-field-top-res-320-value="125"
              data-field-left-value="81" data-field-left-res-960-value="-235" data-field-left-res-640-value="-10"
              data-field-left-res-480-value="21px" data-field-left-res-320-value="0" data-field-width-value="440"
              data-field-width-res-960-value="350" data-field-width-res-640-value="480"
              data-field-width-res-480-value="460" data-field-width-res-320-value="300" data-field-axisy-value="top"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-320-value="top" data-field-axisx-value="left"
              data-field-axisx-res-960-value="center" data-field-axisx-res-320-value="center"
              data-field-container-value="grid" data-field-container-res-960-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px">
              <div class='tn-atom' field='tn_text_1610460253588'>{languages[language].text4}<br /><br />
              {languages[language].text5}<br /><br />{languages[language].text6}</div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2689094981610533124126' data-elem-id='1610533124126'
              data-elem-type='image' data-field-top-value="124" data-field-top-res-960-value="161"
              data-field-top-res-640-value="-235" data-field-top-res-320-value="-90" data-field-left-value="578"
              data-field-left-res-960-value="-322" data-field-left-res-640-value="-132"
              data-field-left-res-320-value="0" data-field-width-value="260" data-field-width-res-960-value="200"
              data-field-width-res-640-value="240" data-field-width-res-320-value="300" data-field-axisy-value="top"
              data-field-axisy-res-640-value="center" data-field-axisx-value="left"
              data-field-axisx-res-960-value="right" data-field-axisx-res-640-value="center"
              data-field-container-value="grid" data-field-container-res-960-value="window"
              data-field-container-res-640-value="window" data-field-container-res-320-value="window"
              data-field-topunits-value="px" data-field-leftunits-value="px" data-field-heightunits-value=""
              data-field-widthunits-value="px" data-field-filewidth-value="652" data-field-fileheight-value="674">
              <div class='tn-atom'> <img class='tn-atom__img'
                  src='https://static.tildacdn.com/tild3230-3262-4335-a431-356530613030/2021-01-05_131148.png'
                  imgfield='tn_img_1610533124126' /> </div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2689094981610533124134' data-elem-id='1610533124134'
              data-elem-type='image' data-field-top-value="414" data-field-top-res-960-value="389"
              data-field-top-res-640-value="-6" data-field-top-res-320-value="685" data-field-left-value="578"
              data-field-left-res-960-value="502" data-field-left-res-640-value="-132" data-field-left-res-320-value="0"
              data-field-width-value="260" data-field-width-res-960-value="200" data-field-width-res-640-value="240"
              data-field-width-res-320-value="300" data-field-axisy-value="top" data-field-axisy-res-640-value="center"
              data-field-axisx-value="left" data-field-axisx-res-640-value="center" data-field-container-value="grid"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px" data-field-filewidth-value="1680"
              data-field-fileheight-value="1173">
              <div class='tn-atom'> <img class='tn-atom__img'
                  src='https://static.tildacdn.com/tild3462-6135-4263-b535-616633386238/shutterstock_1510247.jpg'
                  imgfield='tn_img_1610533124134' /> </div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2689094981610533124140' data-elem-id='1610533124140'
              data-elem-type='image' data-field-top-value="124" data-field-top-res-960-value="161"
              data-field-top-res-640-value="-279" data-field-top-res-320-value="181" data-field-left-value="860"
              data-field-left-res-960-value="-100" data-field-left-res-640-value="130" data-field-left-res-320-value="0"
              data-field-width-value="260" data-field-width-res-960-value="200" data-field-width-res-640-value="240"
              data-field-width-res-320-value="300" data-field-axisy-value="top" data-field-axisy-res-640-value="center"
              data-field-axisx-value="left" data-field-axisx-res-960-value="right"
              data-field-axisx-res-640-value="center" data-field-container-value="grid"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px" data-field-filewidth-value="1680"
              data-field-fileheight-value="1120">
              <div class='tn-atom'> <img class='tn-atom__img'
                  src='https://static.tildacdn.com/tild3963-6234-4531-b465-656137613330/shutterstock_1630012.png'
                  imgfield='tn_img_1610533124140' /> </div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2689094981610533446575' data-elem-id='1610533446575'
              data-elem-type='shape' data-field-top-value="321" data-field-top-res-960-value="315"
              data-field-top-res-640-value="-50" data-field-top-res-320-value="430" data-field-left-value="860"
              data-field-left-res-960-value="725" data-field-left-res-640-value="129" data-field-left-res-320-value="0"
              data-field-height-value="274" data-field-height-res-960-value="213" data-field-height-res-640-value="256"
              data-field-height-res-320-value="256" data-field-width-value="260" data-field-width-res-960-value="199"
              data-field-width-res-640-value="238" data-field-width-res-320-value="300" data-field-axisy-value="top"
              data-field-axisy-res-640-value="center" data-field-axisx-value="left"
              data-field-axisx-res-640-value="center" data-field-container-value="grid"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="px" data-field-widthunits-value="px">
              <div class='tn-atom'
                style={{backgroundImage: "url('https://static.tildacdn.com/tild6661-3761-4466-b434-353264363563/2021-01-13_122305.png')"}}>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="rec269487230" className="r t-rec" data-animationappear="off" data-record-type="396">
        <div class='t396'>
          <div className="t396__artboard" data-artboard-recid="269487230" data-artboard-height="550"
            data-artboard-height-res-960="680" data-artboard-height-res-640="660" data-artboard-height-res-480="720"
            data-artboard-height-res-320="930" data-artboard-height_vh="100" data-artboard-height_vh-res-960="100"
            data-artboard-height_vh-res-640="100" data-artboard-height_vh-res-320="100" data-artboard-valign="center"
            data-artboard-upscale="" data-artboard-ovrflw="">
            <div className="t396__carrier-wrapper">
              <div className="t396__carrier" data-artboard-recid="269487230"></div>
            </div>
            <div className="t396__filter" data-artboard-recid="269487230"></div>
            <div class='t396__elem tn-elem tn-elem__2694872301470209944682' data-elem-id='1470209944682'
              data-elem-type='text' data-field-top-value="-233" data-field-top-res-960-value="-248"
              data-field-top-res-640-value="189" data-field-top-res-480-value="-270" data-field-top-res-320-value="60"
              data-field-left-value="0" data-field-left-res-960-value="0" data-field-left-res-640-value="0"
              data-field-left-res-480-value="0" data-field-left-res-320-value="0" data-field-width-value="850"
              data-field-width-res-960-value="540" data-field-width-res-640-value="590"
              data-field-width-res-480-value="460" data-field-width-res-320-value="300" data-field-axisy-value="center"
              data-field-axisy-res-960-value="center" data-field-axisy-res-640-value="top"
              data-field-axisy-res-320-value="top" data-field-axisx-value="center"
              data-field-axisx-res-320-value="center" data-field-container-value="window"
              data-field-container-res-640-value="window" data-field-container-res-320-value="window"
              data-field-topunits-value="px" data-field-leftunits-value="px" data-field-heightunits-value=""
              data-field-widthunits-value="px">
              <div class='tn-atom' field='tn_text_1470209944682'>{languages[language].header3}</div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2694872301470210011265' data-elem-id='1470210011265'
              data-elem-type='text' data-field-top-value="-102" data-field-top-res-960-value="-121"
              data-field-top-res-640-value="269" data-field-top-res-480-value="-132" data-field-top-res-320-value="128"
              data-field-left-value="0" data-field-left-res-960-value="0" data-field-left-res-640-value="0"
              data-field-left-res-480-value="0" data-field-left-res-320-value="0" data-field-width-value="710"
              data-field-width-res-960-value="640" data-field-width-res-640-value="580"
              data-field-width-res-480-value="430" data-field-width-res-320-value="300" data-field-axisy-value="center"
              data-field-axisy-res-960-value="center" data-field-axisy-res-640-value="top"
              data-field-axisx-value="center" data-field-container-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px">
              <div class='tn-atom' field='tn_text_1470210011265'>{languages[language].text7}<br />
              <br />{languages[language].text8}
            </div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2694872301610458179546' data-elem-id='1610458179546'
              data-elem-type='button' data-field-top-value="33" data-field-top-res-960-value="31"
              data-field-top-res-640-value="436" data-field-top-res-480-value="357" data-field-top-res-320-value="-47"
              data-field-left-value="0" data-field-left-res-960-value="0" data-field-left-res-640-value="0"
              data-field-left-res-480-value="0" data-field-left-res-320-value="0" data-field-height-value="46"
              data-field-width-value="180" data-field-axisy-value="center" data-field-axisy-res-960-value="center"
              data-field-axisy-res-640-value="top" data-field-axisy-res-320-value="center"
              data-field-axisx-value="center" data-field-axisx-res-960-value="center"
              data-field-axisx-res-320-value="center" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-320-value="window"
              data-field-topunits-value="px" data-field-leftunits-value="px" data-field-heightunits-value=""
              data-field-widthunits-value=""> <a class='tn-atom' href="#contacts">{languages[language].btnStarted}</a>
            </div>
            <div class='t396__elem tn-elem tn-elem__2694872301610559556942' data-elem-id='1610559556942'
              data-elem-type='image' data-field-top-value="206" data-field-top-res-960-value="-158"
              data-field-top-res-640-value="239" data-field-top-res-480-value="243" data-field-top-res-320-value="342"
              data-field-left-value="410" data-field-left-res-960-value="340" data-field-left-res-640-value="256"
              data-field-left-res-480-value="104" data-field-left-res-320-value="-80" data-field-width-value="50"
              data-field-width-res-640-value="40" data-field-width-res-480-value="30" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-960-value="center" data-field-axisx-res-640-value="center"
              data-field-axisx-res-320-value="right" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px" data-field-filewidth-value="62"
              data-field-fileheight-value="67">
              <div class='tn-atom'> <img class='tn-atom__img'
                  src='https://static.tildacdn.com/tild6431-6438-4434-b037-376330396339/noun_Checklist_63435.svg'
                  imgfield='tn_img_1610559556942' /> </div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2694872301610559556952' data-elem-id='1610559556952'
              data-elem-type='image' data-field-top-value="200" data-field-top-res-960-value="-163"
              data-field-top-res-640-value="237" data-field-top-res-480-value="125" data-field-top-res-320-value="223"
              data-field-left-value="-76" data-field-left-res-960-value="-70" data-field-left-res-640-value="-45"
              data-field-left-res-480-value="107" data-field-left-res-320-value="81" data-field-width-value="50"
              data-field-width-res-640-value="40" data-field-width-res-480-value="30" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-960-value="center" data-field-axisx-res-640-value="center"
              data-field-axisx-res-320-value="left" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px" data-field-filewidth-value="63"
              data-field-fileheight-value="62">
              <div class='tn-atom'> <img class='tn-atom__img'
                  src='https://static.tildacdn.com/tild3037-3363-4631-a663-386165383261/Shape.svg'
                  imgfield='tn_img_1610559556952' /> </div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2694872301610559556963' data-elem-id='1610559556963'
              data-elem-type='image' data-field-top-value="205" data-field-top-res-960-value="-154"
              data-field-top-res-640-value="241" data-field-top-res-480-value="244" data-field-top-res-320-value="340"
              data-field-left-value="248" data-field-left-res-960-value="194" data-field-left-res-640-value="154"
              data-field-left-res-480-value="0" data-field-left-res-320-value="81" data-field-width-value="50"
              data-field-width-res-640-value="40" data-field-width-res-480-value="30" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-960-value="center" data-field-axisx-res-640-value="center"
              data-field-axisx-res-320-value="left" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px" data-field-filewidth-value="58"
              data-field-fileheight-value="68">
              <div class='tn-atom'> <img class='tn-atom__img'
                  src='https://static.tildacdn.com/tild6235-3161-4135-b964-623233623332/noun_sparks_969639.svg'
                  imgfield='tn_img_1610559556963' /> </div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2694872301610559556974' data-elem-id='1610559556974'
              data-elem-type='image' data-field-top-value="200" data-field-top-res-960-value="-163"
              data-field-top-res-640-value="237" data-field-top-res-480-value="125" data-field-top-res-320-value="95"
              data-field-left-value="-238" data-field-left-res-960-value="-202" data-field-left-res-640-value="-147"
              data-field-left-res-480-value="0" data-field-left-res-320-value="-80" data-field-width-value="50"
              data-field-width-res-640-value="40" data-field-width-res-480-value="30" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-960-value="center" data-field-axisx-res-640-value="center"
              data-field-axisx-res-320-value="right" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px" data-field-filewidth-value="74"
              data-field-fileheight-value="73">
              <div class='tn-atom'> <img class='tn-atom__img'
                  src='https://static.tildacdn.com/tild6438-6531-4633-a466-393764363663/noun_cloud_data_proc.svg'
                  imgfield='tn_img_1610559556974' /> </div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2694872301610559556985' data-elem-id='1610559556985'
              data-elem-type='image' data-field-top-value="197" data-field-top-res-960-value="-175"
              data-field-top-res-640-value="233" data-field-top-res-480-value="239" data-field-top-res-320-value="219"
              data-field-left-value="91" data-field-left-res-960-value="62" data-field-left-res-640-value="57"
              data-field-left-res-480-value="-108" data-field-left-res-320-value="-75" data-field-width-value="60"
              data-field-width-res-640-value="50" data-field-width-res-480-value="40" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-960-value="center" data-field-axisx-res-640-value="center"
              data-field-axisx-res-320-value="right" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px" data-field-filewidth-value="84"
              data-field-fileheight-value="51">
              <div class='tn-atom'> <img class='tn-atom__img'
                  src='https://static.tildacdn.com/tild3333-3562-4238-b131-323631616162/noun_script_1907447.svg'
                  imgfield='tn_img_1610559556985' /> </div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2694872301610559556994' data-elem-id='1610559556994'
              data-elem-type='text' data-field-top-value="273" data-field-top-res-960-value="-88"
              data-field-top-res-640-value="297" data-field-top-res-480-value="179" data-field-top-res-320-value="157"
              data-field-left-value="-410" data-field-left-res-960-value="-349" data-field-left-res-640-value="-254"
              data-field-left-res-480-value="-103" data-field-left-res-320-value="36" data-field-width-value="130"
              data-field-width-res-640-value="100" data-field-width-res-480-value="80"
              data-field-width-res-320-value="130" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-320-value="left" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px">
              <div class='tn-atom' field='tn_text_1610559556994'>{languages[language].camera}<br />{languages[language].camera2}</div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2694872301610559557091' data-elem-id='1610559557091'
              data-elem-type='image' data-field-top-value="197" data-field-top-res-960-value="-169"
              data-field-top-res-640-value="235" data-field-top-res-480-value="123" data-field-top-res-320-value="93"
              data-field-left-value="-410" data-field-left-res-960-value="-349" data-field-left-res-640-value="-254"
              data-field-left-res-480-value="-103" data-field-left-res-320-value="81" data-field-width-value="50"
              data-field-width-res-640-value="40" data-field-width-res-480-value="30" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-960-value="center" data-field-axisx-res-640-value="center"
              data-field-axisx-res-320-value="left" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px" data-field-filewidth-value="71"
              data-field-fileheight-value="61">
              <div class='tn-atom'> <img class='tn-atom__img'
                  src='https://static.tildacdn.com/tild3236-3261-4933-b234-333133313236/noun_CCTV_3674892.svg'
                  imgfield='tn_img_1610559557091' /> </div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2694872301610562326019' data-elem-id='1610562326019'
              data-elem-type='text' data-field-top-value="273" data-field-top-res-960-value="-88"
              data-field-top-res-640-value="297" data-field-top-res-480-value="179" data-field-top-res-320-value="165"
              data-field-left-value="-238" data-field-left-res-960-value="-202" data-field-left-res-640-value="-147"
              data-field-left-res-480-value="0" data-field-left-res-320-value="-35" data-field-width-value="110"
              data-field-width-res-960-value="120" data-field-width-res-640-value="90"
              data-field-width-res-480-value="80" data-field-width-res-320-value="130" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-320-value="right" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px">
              <div class='tn-atom' field='tn_text_1610562326019'>{languages[language].cloud}<br />{languages[language].cloud2}</div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2694872301610562332418' data-elem-id='1610562332418'
              data-elem-type='text' data-field-top-value="273" data-field-top-res-960-value="-118"
              data-field-top-res-640-value="297" data-field-top-res-480-value="180" data-field-top-res-320-value="267"
              data-field-left-value="-76" data-field-left-res-960-value="-70" data-field-left-res-640-value="-45"
              data-field-left-res-480-value="107" data-field-left-res-320-value="36" data-field-width-value="110"
              data-field-width-res-960-value="100" data-field-width-res-640-value="90"
              data-field-width-res-480-value="80" data-field-width-res-320-value="130" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-320-value="left" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px">
              <div class='tn-atom' field='tn_text_1610562332418'>{languages[language].analysis}</div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2694872301610562340424' data-elem-id='1610562340424'
              data-elem-type='text' data-field-top-value="273" data-field-top-res-960-value="-88"
              data-field-top-res-640-value="297" data-field-top-res-480-value="296" data-field-top-res-320-value="279"
              data-field-left-value="91" data-field-left-res-960-value="62" data-field-left-res-640-value="57"
              data-field-left-res-480-value="-108" data-field-left-res-320-value="-35" data-field-width-value="120"
              data-field-width-res-960-value="120" data-field-width-res-640-value="90"
              data-field-width-res-480-value="80" data-field-width-res-320-value="130" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-320-value="right" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px">
              <div class='tn-atom' field='tn_text_1610562340424'>{languages[language].automation}<br />{languages[language].design}</div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2694872301610562346108' data-elem-id='1610562346108'
              data-elem-type='text' data-field-top-value="273" data-field-top-res-960-value="-118"
              data-field-top-res-640-value="297" data-field-top-res-480-value="297" data-field-top-res-320-value="393"
              data-field-left-value="248" data-field-left-res-960-value="194" data-field-left-res-640-value="154"
              data-field-left-res-480-value="0" data-field-left-res-320-value="36" data-field-width-value="90"
              data-field-width-res-960-value="100" data-field-width-res-640-value="80"
              data-field-width-res-480-value="60" data-field-width-res-320-value="130" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-320-value="left" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px">
              <div class='tn-atom' field='tn_text_1610562346108'>{languages[language].insights}</div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2694872301610562355002' data-elem-id='1610562355002'
              data-elem-type='text' data-field-top-value="273" data-field-top-res-960-value="-118"
              data-field-top-res-640-value="297" data-field-top-res-480-value="295" data-field-top-res-320-value="398"
              data-field-left-value="410" data-field-left-res-960-value="340" data-field-left-res-640-value="256"
              data-field-left-res-480-value="104" data-field-left-res-320-value="-35" data-field-width-value="130"
              data-field-width-res-960-value="148" data-field-width-res-640-value="100"
              data-field-width-res-480-value="100" data-field-width-res-320-value="130" data-field-axisy-value="center"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="center"
              data-field-axisy-res-320-value="center" data-field-axisx-value="center"
              data-field-axisx-res-320-value="right" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px">
              <div class='tn-atom' field='tn_text_1610562355002'>{languages[language].requirements}</div>
            </div>
          </div>
        </div>
      </div>
      <div id="rec268896361" className="r t-rec" style={{backgroundColor: "#56b5dd"}} data-record-type="396"
        data-bg-color="#56b5dd">
        <div class='t396'>
          <div className="t396__artboard" data-artboard-recid="268896361" data-artboard-height="720"
            data-artboard-height-res-960="450" data-artboard-height-res-640="665" data-artboard-height-res-480="785"
            data-artboard-height-res-320="790" data-artboard-height_vh="" data-artboard-valign="center"
            data-artboard-upscale="" data-artboard-ovrflw="">
            <div className="t396__carrier" data-artboard-recid="268896361"></div>
            <div className="t396__filter" data-artboard-recid="268896361"></div>
            <div class='t396__elem tn-elem tn-elem__2688963611610460174912' data-elem-id='1610460174912'
              data-elem-type='text' data-field-top-value="32" data-field-top-res-960-value="17"
              data-field-top-res-640-value="218" data-field-top-res-480-value="267" data-field-top-res-320-value="-67"
              data-field-left-value="-110" data-field-left-res-960-value="-102" data-field-left-res-640-value="6"
              data-field-left-res-480-value="-10" data-field-left-res-320-value="0" data-field-width-value="390"
              data-field-width-res-960-value="370" data-field-width-res-640-value="510"
              data-field-width-res-480-value="460" data-field-width-res-320-value="290" data-field-axisy-value="center"
              data-field-axisy-res-960-value="center" data-field-axisy-res-320-value="bottom"
              data-field-axisx-value="right" data-field-axisx-res-960-value="right"
              data-field-axisx-res-640-value="center" data-field-axisx-res-320-value="center"
              data-field-container-value="grid" data-field-container-res-960-value="window"
              data-field-container-res-640-value="window" data-field-container-res-480-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px">
              <div class='tn-atom' field='tn_text_1610460174912'>{languages[language].text9}<br /><br />
              {languages[language].text10}<br /><br />{languages[language].text11}</div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2688963611610460174919' data-elem-id='1610460174919'
              data-elem-type='text' data-field-top-value="-197" data-field-top-res-960-value="-111"
              data-field-top-res-640-value="-238" data-field-top-res-480-value="80" data-field-top-res-320-value="65"
              data-field-left-value="-90" data-field-left-res-960-value="-122" data-field-left-res-640-value="-220"
              data-field-left-res-480-value="-50" data-field-left-res-320-value="0" data-field-width-value="420"
              data-field-width-res-960-value="350" data-field-width-res-320-value="240" data-field-axisy-value="center"
              data-field-axisy-res-960-value="center" data-field-axisy-res-480-value="top"
              data-field-axisx-value="right" data-field-axisx-res-960-value="right"
              data-field-axisx-res-320-value="center" data-field-container-value="grid"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-480-value="window" data-field-container-res-320-value="window"
              data-field-topunits-value="px" data-field-leftunits-value="px" data-field-heightunits-value=""
              data-field-widthunits-value="px">
              <div class='tn-atom' field='tn_text_1610460174919'><strong>{languages[language].header4}</strong></div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2688963611610533068490' data-elem-id='1610533068490'
              data-elem-type='shape' data-field-top-value="136" data-field-top-res-960-value="75"
              data-field-top-res-640-value="155" data-field-top-res-480-value="-31" data-field-top-res-320-value="-65"
              data-field-left-value="81" data-field-left-res-960-value="102" data-field-left-res-640-value="0"
              data-field-left-res-480-value="1" data-field-left-res-320-value="0" data-field-height-value="448"
              data-field-height-res-960-value="299" data-field-height-res-640-value="309"
              data-field-height-res-480-value="398" data-field-height-res-320-value="290" data-field-width-value="543"
              data-field-width-res-960-value="385" data-field-width-res-640-value="499"
              data-field-width-res-480-value="459" data-field-width-res-320-value="304" data-field-axisy-value="top"
              data-field-axisy-res-480-value="center" data-field-axisy-res-320-value="center"
              data-field-axisx-value="left" data-field-axisx-res-640-value="center"
              data-field-axisx-res-480-value="center" data-field-axisx-res-320-value="center"
              data-field-container-value="grid" data-field-container-res-960-value="window"
              data-field-container-res-640-value="window" data-field-container-res-480-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="px" data-field-widthunits-value="px">
              <div class='tn-atom'
                style={{backgroundImage: "url('https://static.tildacdn.com/tild6564-6133-4134-b666-393064626436/2021-01-13_121522.jpg')"}}>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div id="rec268988174" className="r t-rec" data-animationappear="off" data-record-type="241">
        <div className="t213" id="t213-marker268988174" data-bg-color="#56b5dd"></div>
      </div>
      <div id="rec269342599" className="r t-rec" data-record-type="215"><a name="contacts"
          style={{fontSize: 0}}></a>
      </div>
      <div id="rec268897427" className="r t-rec t-rec_pb_15" style={{paddingBottom: "15px"}} data-animationappear="off"
        data-record-type="396">
        <div class='t396'>
          <div className="t396__artboard" data-artboard-recid="268897427" data-artboard-height="650"
            data-artboard-height_vh="" data-artboard-valign="center" data-artboard-upscale="grid"
            data-artboard-ovrflw="">
            <div className="t396__carrier" data-artboard-recid="268897427"></div>
            <div className="t396__filter" data-artboard-recid="268897427"></div>
            <div class='t396__elem tn-elem tn-elem__2688974271470233923389' data-elem-id='1470233923389'
              data-elem-type='text' data-field-top-value="95" data-field-top-res-960-value="100"
              data-field-top-res-640-value="60" data-field-top-res-480-value="60" data-field-top-res-320-value="60"
              data-field-left-value="0" data-field-left-res-960-value="0" data-field-left-res-640-value="0"
              data-field-left-res-480-value="0" data-field-left-res-320-value="0" data-field-width-value="840"
              data-field-width-res-640-value="610" data-field-width-res-480-value="460"
              data-field-width-res-320-value="310" data-field-axisy-value="top" data-field-axisy-res-960-value="top"
              data-field-axisx-value="center" data-field-axisx-res-960-value="center"
              data-field-axisx-res-640-value="center" data-field-axisx-res-480-value="center"
              data-field-axisx-res-320-value="center" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-480-value="window" data-field-container-res-320-value="window"
              data-field-topunits-value="px" data-field-leftunits-value="px" data-field-heightunits-value=""
              data-field-widthunits-value="px">
              <div class='tn-atom' field='tn_text_1470233923389'>{languages[language].header5}</div>
            </div>
            <div class='t396__elem tn-elem btn tn-elem__2688974271610448173120' data-elem-id='1610448173120'
              data-elem-type='form' data-field-top-value="7" data-field-top-res-960-value="14"
              data-field-top-res-640-value="10" data-field-top-res-480-value="0" data-field-top-res-320-value="0"
              data-field-left-value="0" data-field-left-res-960-value="0" data-field-left-res-640-value="0"
              data-field-left-res-480-value="0" data-field-left-res-320-value="0" data-field-width-value="770"
              data-field-width-res-960-value="500" data-field-width-res-640-value="500"
              data-field-width-res-480-value="430" data-field-width-res-320-value="300" data-field-axisy-value="center"
              data-field-axisy-res-960-value="center" data-field-axisy-res-640-value="center"
              data-field-axisy-res-480-value="center" data-field-axisy-res-320-value="center"
              data-field-axisx-value="center" data-field-axisx-res-960-value="center"
              data-field-axisx-res-640-value="center" data-field-axisx-res-480-value="center"
              data-field-axisx-res-320-value="center" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-480-value="window" data-field-container-res-320-value="window"
              data-field-topunits-value="px" data-field-leftunits-value="px" data-field-heightunits-value=""
              data-field-widthunits-value="px" data-field-inputpos-value="v" data-field-inputfontfamily-value="Roboto"
              data-field-inputfontsize-value="16" data-field-inputfontweight-value="400"
              data-field-inputcolor-value="#f7fdff" data-field-inputbordercolor-value="#f7fdff"
              data-field-inputbordersize-value="2" data-field-inputradius-value="30" data-field-inputheight-value="56"
              data-field-inputmargbottom-value="32" data-field-inputmargright-value="20"
              data-field-inputtitlefontsize-value="16" data-field-inputtitlefontweight-value="400"
              data-field-inputtitlecolor-value="#ffffff" data-field-inputtitlemargbottom-value="10"
              data-field-inputelsfontweight-value="400" data-field-inputelsfontsize-value="14"
              data-field-buttontitle-value="SUBMIT" data-field-buttonalign-value="center"
              data-field-buttoncolor-value="#099fe0" data-field-buttonbgcolor-value="#f7fdff"
              data-field-buttonradius-value="30" data-field-buttonwidth-value="770" data-field-buttonheight-value="60"
              data-field-buttonfontfamily-value="Roboto" data-field-buttonfontsize-value="18"
              data-field-buttonfontweight-value="600" data-field-receivers-value="7fe1ec93ddacfc0015f9c31b391b92b0">
              <div class='tn-atom tn-atom__form'>
                  <form id="form268897427" name="form268897427" role="form" action="https://forms.tildacdn.com/procces/" method="POST" data-formactiontype="2" data-inputbox=".t-input-group" className="t-form js-form-proccess t-form_inputs-total_3" data-success-callback="t396_onSuccess" data-success-popup="y" data-error-popup="y">
                      <input type="hidden" name="formservices[]" value="7fe1ec93ddacfc0015f9c31b391b92b0" className="js-formaction-services" />
                      <div className="js-successbox t-form__successbox t-text t-text_sm" style={{display: "none"}}></div>
                      <div className="t-form__inputsbox">
                          <div className="t-input-group t-input-group_nm" style={{marginBottom: "32px"}}>
                              <div className="t-input-block">
                                  <input type="text" name="name" className="t-input js-tilda-rule " value="" placeholder={languages[language].name} data-tilda-rule="name" style={{color:"#f7fdff", border: "2px solid #f7fdff", backgroundColor: "transparent", borderRadius: "30px", "-moz-border-radius": "30px", "-webkit-border-radius": "30px", fontSize: "16px", fontWeight: 400, height: "56px"}} />
                                  <div className="t-input-error"></div>
                              </div>
                          </div>
                          <div className="t-input-group t-input-group_em" data-input-lid="1531306243545" style={{marginBottom: "32px"}}>
                              <div className="t-input-block">
                                  <input type="text" name="email" className="t-input js-tilda-rule " value="" placeholder={languages[language].email} data-tilda-rule="email" style={{color: "#f7fdff", border: "2px solid #f7fdff", backgroundColor: "transparent", borderRadius: "30px", "-moz-border-radius": "30px", "-webkit-border-radius": "30px", fontSize: "16px", fontWeight: 400, height: "56px"}} />
                                      <div className="t-input-error"></div>
                              </div>
                          </div>
                          <div className="t-input-group t-input-group_uw" data-input-lid="1638467903038" style={{marginBottom: "32px"}}>
                              <div className="t-input-title" data-redactor-toolbar="no" field="nullli_title__1638467903038" style={{color: "#ffffff", fontWeight:400, fontFamily: 'Roboto', fontSize: "16px", paddingBottom: "10px", textAlign: "left"}}>{languages[language].uploadVideo}</div>
                              <div className="t-input-block">
                                  <div className="t-upwidget" style={{marginBottom: "5px", minHeight: "38px"}}>
                                      <div className="t-upwidget-container" data-tilda-name="Upload video from your process to get started" data-tilda-upwidget-key="google-ee93b439e2c587a9bd29118" data-tilda-req="1" id="7892849147307757" data-tilda-upwidget-multiple="true" data-tilda-accept="text/*,application/vnd.ms-excel,application/vnd.ms-powerpoint,application/msword,application/vnd.oasis.opendocument.*,application/pdf,application/rtf,application/vnd.visio,image/*,video/*,audio/*,application/x-rar-compressed,application/x-tar,application/zip,application/x-7z-compressed,application/x-bzip,application/x-bzip2" data-tilda-upwidget-file-size="31457280">
                                          <div style={{color: "#099fe0", backgroundColor: "#f7fdff", borderRadius: "30px", fontFamily: "Roboto", fontSize: "18px"}} className="t-upwidget-container__button t-text">{languages[language].addFiles}</div>
                                          <input type="hidden" value="" className="js-tilda-rule" name="Upload video from your process to get started" data-tilda-req="1" />
                                          </div>
                                      </div>
                                      <div class="t-input-error"></div>
                                </div>
                            </div>
                            <div className="t-form__errorbox-middle">
                                <div className="js-errorbox-all t-form__errorbox-wrapper" style={{display: "none"}}>
                                    <div className="t-form__errorbox-text t-text t-text_xs">
                                        <p className="t-form__errorbox-item js-rule-error js-rule-error-all"></p>
                                        <p className="t-form__errorbox-item js-rule-error js-rule-error-req"></p>
                                        <p className="t-form__errorbox-item js-rule-error js-rule-error-email"></p>
                                        <p className="t-form__errorbox-item js-rule-error js-rule-error-name"></p>
                                        <p className="t-form__errorbox-item js-rule-error js-rule-error-phone"></p>
                                        <p className="t-form__errorbox-item js-rule-error js-rule-error-string"></p>
                                    </div>
                                    <div className="tn-form__errorbox-close js-errorbox-close">
                                        <div className="tn-form__errorbox-close-line tn-form__errorbox-close-line-left"></div>
                                        <div className="tn-form__errorbox-close-line tn-form__errorbox-close-line-right"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="tn-form__submit" style={{textAlign: "center"}}>
                                <button type="submit" className="t-submit" style={{color: "#099fe0", backgroundColor: "#f7fdff", borderRadius: "30px", fontFamily: "Roboto", fontWeight: 600, fontSize: "18px", height: "60px", marginLeft: "auto", marginRight: "auto", padding: "0 15px", display: "block"}}>{languages[language].submitBtn}</button>
                            </div>
                        </div>
                        <div className="t-form__errorbox-bottom">
                            <div className="js-errorbox-all t-form__errorbox-wrapper" style={{display: "none"}}>
                                <div className="t-form__errorbox-text t-text t-text_xs">
                                    <p className="t-form__errorbox-item js-rule-error js-rule-error-all"></p>
                                    <p className="t-form__errorbox-item js-rule-error js-rule-error-req"></p>
                                    <p className="t-form__errorbox-item js-rule-error js-rule-error-email"></p>
                                    <p className="t-form__errorbox-item js-rule-error js-rule-error-name"></p>
                                    <p className="t-form__errorbox-item js-rule-error js-rule-error-phone"></p>
                                    <p className="t-form__errorbox-item js-rule-error js-rule-error-string"></p>
                                </div>
                                <div className="tn-form__errorbox-close js-errorbox-close">
                                    <div className="tn-form__errorbox-close-line tn-form__errorbox-close-line-left"></div>
                                    <div className="tn-form__errorbox-close-line tn-form__errorbox-close-line-right"></div>
                                </div>
                            </div>
                        </div>
                        <div style={{position: "absolute", left: "-5000px", bottom: 0}}>
                            <input type="text" name="form-spec-comments" value="Its good" className="js-form-spec-comments" tabindex="-1" />
                        </div>
                    </form>
              </div>
              <div data-nosnippet="true" className="tn-atom__inputs-wrapp" style={{display: "none"}}>
                  <textarea className="tn-atom__inputs-textarea"></textarea>
              </div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2688974271610567471934' data-elem-id='1610567471934'
              data-elem-type='image' data-field-top-value="-24" data-field-top-res-960-value="-15"
              data-field-top-res-640-value="-11" data-field-top-res-480-value="-17" data-field-top-res-320-value="-82"
              data-field-left-value="120" data-field-left-res-960-value="64" data-field-left-res-640-value="31"
              data-field-left-res-480-value="13" data-field-left-res-320-value="30" data-field-width-value="100"
              data-field-width-res-960-value="100" data-field-width-res-640-value="80"
              data-field-width-res-480-value="70" data-field-width-res-320-value="80" data-field-axisy-value="bottom"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="bottom"
              data-field-axisy-res-480-value="bottom" data-field-axisy-res-320-value="bottom"
              data-field-axisx-value="left" data-field-axisx-res-960-value="left" data-field-axisx-res-640-value="left"
              data-field-axisx-res-480-value="left" data-field-axisx-res-320-value="left"
              data-field-container-value="window" data-field-container-res-960-value="window"
              data-field-container-res-640-value="window" data-field-container-res-480-value="window"
              data-field-container-res-320-value="window" data-field-topunits-value="px" data-field-leftunits-value="px"
              data-field-heightunits-value="" data-field-widthunits-value="px" data-field-filewidth-value="871"
              data-field-fileheight-value="335">
              <div class='tn-atom'> <img class='tn-atom__img'
                  src='https://static.tildacdn.com/tild3236-3864-4931-b862-383437366461/logo_white.png'
                  imgfield='tn_img_1610567471934' /> </div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2688974271610654898495' data-elem-id='1610654898495'
              data-elem-type='text' data-field-top-value="-24" data-field-top-res-960-value="-15"
              data-field-top-res-640-value="-11" data-field-top-res-480-value="-17" data-field-top-res-320-value="-28"
              data-field-left-value="-109" data-field-left-res-960-value="-51" data-field-left-res-640-value="-20"
              data-field-left-res-480-value="-10" data-field-left-res-320-value="30" data-field-width-value="520"
              data-field-width-res-960-value="450" data-field-width-res-640-value="450"
              data-field-width-res-480-value="340" data-field-width-res-320-value="220" data-field-axisy-value="bottom"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="bottom"
              data-field-axisy-res-480-value="bottom" data-field-axisy-res-320-value="bottom"
              data-field-axisx-value="right" data-field-axisx-res-960-value="right"
              data-field-axisx-res-640-value="right" data-field-axisx-res-480-value="right"
              data-field-axisx-res-320-value="left" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-480-value="window" data-field-container-res-320-value="window"
              data-field-topunits-value="px" data-field-leftunits-value="px" data-field-heightunits-value=""
              data-field-widthunits-value="px">
              <div class='tn-atom' field='tn_text_1610654898495'>{languages[language].reserved}<br />Copyright © 2021 Twist
                Robotics.
              </div>
            </div>
            <div class='t396__elem tn-elem tn-elem__2688974271610655565081' data-elem-id='1610655565081'
              data-elem-type='text' data-field-top-value="-88" data-field-top-res-960-value="-93"
              data-field-top-res-640-value="-78" data-field-top-res-480-value="-138" data-field-top-res-320-value="-132"
              data-field-left-value="0" data-field-left-res-960-value="0" data-field-left-res-640-value="210"
              data-field-left-res-480-value="105" data-field-left-res-320-value="30" data-field-width-value="330"
              data-field-width-res-960-value="310" data-field-width-res-640-value="280"
              data-field-width-res-480-value="270" data-field-width-res-320-value="280" data-field-axisy-value="bottom"
              data-field-axisy-res-960-value="bottom" data-field-axisy-res-640-value="bottom"
              data-field-axisy-res-480-value="bottom" data-field-axisy-res-320-value="bottom"
              data-field-axisx-value="center" data-field-axisx-res-960-value="center"
              data-field-axisx-res-640-value="left" data-field-container-value="window"
              data-field-container-res-960-value="window" data-field-container-res-640-value="window"
              data-field-container-res-480-value="window" data-field-container-res-320-value="window"
              data-field-topunits-value="px" data-field-leftunits-value="px" data-field-heightunits-value=""
              data-field-widthunits-value="px">
              <div class='tn-atom' field='tn_text_1610655565081'>info@twistrobotics.com</div>
            </div>
          </div>
        </div>
      </div>
      <div id="rec386123775" className="r t-rec" data-animationappear="off" data-record-type="702">
        <div className="t702">
          <div className="t-popup" data-tooltip-hook="#popup:myform">
            <div className="t-popup__close">
              <div className="t-popup__close-wrapper"> <svg className="t-popup__close-icon" width="23px" height="23px"
                  viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="none" stroke-width="1" fill="#fff" fill-rule="evenodd">
                    <rect
                      transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) "
                      x="10.3137085" y="-3.6862915" width="2" height="30"></rect>
                    <rect
                      transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) "
                      x="10.3137085" y="-3.6862915" width="2" height="30"></rect>
                  </g>
                </svg> </div>
            </div>
            <div className="t-popup__container t-width t-width_6"> <img className="t702__img t-img"
                src="https://static.tildacdn.com/tild6161-3232-4631-a630-613066663037/ScreenShot20151222at180157.png"
                imgfield="img" />
              <div className="t702__wrapper">
                <div className="t702__text-wrapper t-align_center">
                  <div className="t702__title t-title t-title_xxs">Get a free lesson</div>
                  <div className="t702__descr t-descr t-descr_xs">Just type your contacts</div>
                </div>
                <form id="form386123775" name='form386123775' role="form" action='' method='POST'
                  data-formactiontype="0" data-inputbox=".t-input-group"
                  className="t-form js-form-proccess t-form_inputs-total_3 " data-success-callback="t702_onSuccess">
                  <div className="js-successbox t-form__successbox t-text t-text_md" style={{display: "none"}}></div>
                  <div className="t-form__inputsbox">
                    <div className="t-input-group t-input-group_em" data-input-lid="1495810354468">
                      <div className="t-input-block"> <input type="text" autocomplete="email" name="Email"
                          className="t-input js-tilda-rule " value="" placeholder="Email" data-tilda-rule="email"
                          style={{color:"#000000", border: "1px solid #c9c9c9", borderRadius: "5px", "-moz-border-radius": "5px", "-webkit-border-radius": "5px"}} />
                        <div className="t-input-error"></div>
                      </div>
                    </div>
                    <div className="t-input-group t-input-group_nm" data-input-lid="1495810359387">
                      <div className="t-input-block"> <input type="text" autocomplete="name" name="Name"
                          className="t-input js-tilda-rule " value="" placeholder="Name" data-tilda-rule="name"
                          style={{color:"#000000", border: "1px solid #c9c9c9", borderRadius: "5px", "-moz-border-radius": "5px", "-webkit-border-radius": "5px"}} />
                        <div className="t-input-error"></div>
                      </div>
                    </div>
                    <div className="t-input-group t-input-group_ph" data-input-lid="1495810410810">
                      <div className="t-input-block"> <input type="tel" autocomplete="tel" name="Phone"
                          className="t-input js-tilda-rule " value="" placeholder="Phone" data-tilda-rule="phone"
                          pattern="[0-9]*"
                          style={{color: "#000000", border: "1px solid #c9c9c9", borderRadius: "5px", "-moz-border-radius": "5px", "-webkit-border-radius": "5px"}} />
                        <div className="t-input-error"></div>
                      </div>
                    </div>
                    <div className="t-form__errorbox-middle">
                      <div className="js-errorbox-all t-form__errorbox-wrapper" style={{display: "none"}}>
                        <div className="t-form__errorbox-text t-text t-text_md">
                          <p className="t-form__errorbox-item js-rule-error js-rule-error-all"></p>
                          <p className="t-form__errorbox-item js-rule-error js-rule-error-req"></p>
                          <p className="t-form__errorbox-item js-rule-error js-rule-error-email"></p>
                          <p className="t-form__errorbox-item js-rule-error js-rule-error-name"></p>
                          <p className="t-form__errorbox-item js-rule-error js-rule-error-phone"></p>
                          <p className="t-form__errorbox-item js-rule-error js-rule-error-minlength"></p>
                          <p className="t-form__errorbox-item js-rule-error js-rule-error-string"></p>
                        </div>
                      </div>
                    </div>
                    <div className="t-form__submit"> <button type="submit" className="t-submit"
                        style={{color: "#ffffff", backgroundColor: "#000000", borderRadius: "5px", "-moz-border-radius": "5px", "-webkit-border-radius": "5px"}}>Submit</button>
                    </div>
                  </div>
                  <div className="t-form__errorbox-bottom">
                    <div className="js-errorbox-all t-form__errorbox-wrapper" style={{display: "none"}}>
                      <div className="t-form__errorbox-text t-text t-text_md">
                        <p className="t-form__errorbox-item js-rule-error js-rule-error-all"></p>
                        <p className="t-form__errorbox-item js-rule-error js-rule-error-req"></p>
                        <p className="t-form__errorbox-item js-rule-error js-rule-error-email"></p>
                        <p className="t-form__errorbox-item js-rule-error js-rule-error-name"></p>
                        <p className="t-form__errorbox-item js-rule-error js-rule-error-phone"></p>
                        <p className="t-form__errorbox-item js-rule-error js-rule-error-minlength"></p>
                        <p className="t-form__errorbox-item js-rule-error js-rule-error-string"></p>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="t702__form-bottom-text t-text t-text_xs t-align_center">It's totally free</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Home;