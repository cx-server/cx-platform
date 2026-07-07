import{j as e}from"./jsx-runtime-8P-18mTY.js";import{A as n}from"./Article-SXNvf8K4.js";import{A as i,a as s}from"./ArticleContent-D4v8PQBD.js";import{b as N,a as r}from"./ListHeader-iKCZ9M2k.js";import{S as g,a as x,b}from"./SectionHeader-Dh1uvT9d.js";import{S as o}from"./chevron-right-icon-CA_hVjOj.js";import{S as l}from"./globe-icon-BlpZtAhL.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const k={title:"Components/Section/Section",component:g,parameters:{layout:"fullscreen"},decorators:[j=>e.jsx("div",{className:"bg-surface p-4",children:e.jsx("div",{className:"max-w-lg mx-auto",children:e.jsx(j,{})})})],argTypes:{children:{},className:{}},tags:["autodocs"]},a={argTypes:{},args:{id:"information-section",children:[e.jsx(x,{children:e.jsx("h2",{className:"subtitle",children:"Payments"})}),e.jsxs(b,{children:[e.jsx("p",{className:"paragraph",children:"Here is some information about payments."}),e.jsxs(n,{id:"information-section-bonus-article",children:[e.jsx(i,{children:e.jsx("h3",{className:"headline",children:"Bonus"})}),e.jsx(s,{children:e.jsx("p",{className:"paragraph",children:"You can recieve a a bonus on sports events."})})]}),e.jsxs(n,{id:"information-section-limits-article",children:[e.jsx(i,{children:e.jsx("h3",{className:"headline",children:"Limits"})}),e.jsx(s,{children:e.jsx("p",{className:"paragraph",children:"You can set a limit for the amount of money that you are able to bet on sports events."})})]}),e.jsxs(n,{id:"information-section-countries-article",children:[e.jsx(i,{children:e.jsx("h3",{className:"headline",children:"Countries"})}),e.jsxs(s,{children:[e.jsx("p",{className:"paragraph",children:"Here is a list of countries:"}),e.jsxs("ul",{className:"bullet-list",children:[e.jsx("li",{children:"Germany"}),e.jsx("li",{children:"Austria"}),e.jsx("li",{children:"Turkey"})]})]})]}),e.jsxs(n,{id:"information-section-sports-article",children:[e.jsx(i,{children:e.jsx("h3",{className:"headline",children:"Sports"})}),e.jsxs(s,{children:[e.jsx("p",{className:"paragraph",children:"Here is a list of sports:"}),e.jsxs("ol",{className:"numbered-list",children:[e.jsx("li",{children:"Football"}),e.jsx("li",{children:"Basketball"}),e.jsx("li",{children:"Tennis"})]})]})]}),e.jsx(n,{id:"information-section-learn-more-article",children:e.jsx("a",{href:"/",className:"text-link",children:"Click here to learn more!"})})]})]}},t={argTypes:{},args:{id:"navigation-section",children:[e.jsx(x,{children:e.jsx("h2",{className:"subtitle",children:"Account"})}),e.jsxs(N,{id:"list-section-story",className:"bg-card",clickable:!0,children:[e.jsx(r,{id:"nav-listitem-1",className:"subheadline",iconComponent:e.jsx(l,{}),rightComponent:e.jsx(o,{className:"icon-sm"}),children:"Details"}),e.jsx(r,{id:"nav-listitem-2",className:"subheadline",iconComponent:e.jsx(l,{}),rightComponent:e.jsx(o,{className:"icon-sm"}),children:"Verification"}),e.jsx(r,{id:"nav-listitem-3",className:"subheadline",iconComponent:e.jsx(l,{}),rightComponent:e.jsx(o,{className:"icon-sm"}),children:"Settings"})]})]}};var c,m,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  argTypes: {},
  args: {
    id: "information-section",
    children: [<SectionHeader>
                <h2 className="subtitle">Payments</h2>
            </SectionHeader>, <SectionContent>
                <p className="paragraph">Here is some information about payments.</p>
                <Article id="information-section-bonus-article">
                    <ArticleHeader>
                        <h3 className="headline">Bonus</h3>
                    </ArticleHeader>
                    <ArticleContent>
                        <p className="paragraph">You can recieve a a bonus on sports events.</p>
                    </ArticleContent>
                </Article>
                <Article id="information-section-limits-article">
                    <ArticleHeader>
                        <h3 className="headline">Limits</h3>
                    </ArticleHeader>
                    <ArticleContent>
                        <p className="paragraph">
                            You can set a limit for the amount of money that you are able to bet on sports events.
                        </p>
                    </ArticleContent>
                </Article>
                <Article id="information-section-countries-article">
                    <ArticleHeader>
                        <h3 className="headline">Countries</h3>
                    </ArticleHeader>
                    <ArticleContent>
                        <p className="paragraph">Here is a list of countries:</p>
                        <ul className="bullet-list">
                            <li>Germany</li>
                            <li>Austria</li>
                            <li>Turkey</li>
                        </ul>
                    </ArticleContent>
                </Article>
                <Article id="information-section-sports-article">
                    <ArticleHeader>
                        <h3 className="headline">Sports</h3>
                    </ArticleHeader>
                    <ArticleContent>
                        <p className="paragraph">Here is a list of sports:</p>
                        <ol className="numbered-list">
                            <li>Football</li>
                            <li>Basketball</li>
                            <li>Tennis</li>
                        </ol>
                    </ArticleContent>
                </Article>
                <Article id="information-section-learn-more-article">
                    <a href="/" className="text-link">
                        Click here to learn more!
                    </a>
                </Article>
            </SectionContent>]
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var h,p,u;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  argTypes: {},
  args: {
    id: "navigation-section",
    children: [<SectionHeader>
                <h2 className="subtitle">Account</h2>
            </SectionHeader>, <List id="list-section-story" className="bg-card" clickable>
                <ListItem id="nav-listitem-1" className="subheadline" iconComponent={<GlobeIcon />} rightComponent={<ChevronRightIcon className="icon-sm" />}>
                    Details
                </ListItem>
                <ListItem id="nav-listitem-2" className="subheadline" iconComponent={<GlobeIcon />} rightComponent={<ChevronRightIcon className="icon-sm" />}>
                    Verification
                </ListItem>
                <ListItem id="nav-listitem-3" className="subheadline" iconComponent={<GlobeIcon />} rightComponent={<ChevronRightIcon className="icon-sm" />}>
                    Settings
                </ListItem>
            </List>]
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const T=["InformationSection","NavigationSection"];export{a as InformationSection,t as NavigationSection,T as __namedExportsOrder,k as default};
