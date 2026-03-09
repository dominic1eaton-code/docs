import { useState, useEffect } from "react";

/* ── Google Fonts ─────────────────────────────────────────────────────────── */
const GF = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&family=DM+Mono:wght@400;500&display=swap');
    *{box-sizing:border-box;margin:0;padding:0;}
    ::-webkit-scrollbar{width:4px;height:4px;}
    ::-webkit-scrollbar-track{background:transparent;}
    ::-webkit-scrollbar-thumb{background:#2878C8;border-radius:4px;}
    .fade{animation:fi 0.22s ease-out;}
    @keyframes fi{from{opacity:0;transform:translateY(5px);}to{opacity:1;transform:translateY(0);}}
  `}</style>
);

/* ── Tokens ───────────────────────────────────────────────────────────────── */
const T = {
  brand:"#0B2545",accent:"#1557A0",mid:"#2878C8",light:"#D4E8F8",
  pale:"#EBF4FC",surface:"#F4F7FA",white:"#FFFFFF",border:"#E2EAF2",
  text:"#1C2B3A",muted:"#5A6A7A",gray1:"#F1F5F9",gray2:"#E4EAF2",
  success:"#C6EFCE",successTxt:"#1A5C28",warn:"#FFF3CD",warnTxt:"#7A5200",
  error:"#FDDCDC",errorTxt:"#A80000",navy2:"#1E3A5F",
};

/* ── Micro Components ─────────────────────────────────────────────────────── */
const f = "DM Sans, system-ui, sans-serif";
const fm = "'DM Mono', monospace";

const Badge = ({label,color="blue"})=>{
  const m={blue:{bg:T.light,c:T.accent},green:{bg:T.success,c:T.successTxt},amber:{bg:T.warn,c:T.warnTxt},red:{bg:T.error,c:T.errorTxt},gray:{bg:T.gray1,c:T.muted},navy:{bg:T.navy2,c:"#D4E8F8"}};
  const s=m[color]||m.blue;
  return<span style={{background:s.bg,color:s.c,fontSize:10.5,fontWeight:700,padding:"2px 8px",borderRadius:99,fontFamily:fm,letterSpacing:"0.03em",whiteSpace:"nowrap"}}>{label}</span>;
};

const Btn=({children,v="primary",sm,onClick})=>{
  const b={fontFamily:f,fontWeight:600,borderRadius:6,cursor:"pointer",fontSize:sm?11.5:13,padding:sm?"4px 10px":"7px 16px",border:"none",transition:"all 0.15s"};
  const s={primary:{...b,background:T.accent,color:"#fff"},secondary:{...b,background:"transparent",color:T.accent,border:`1.5px solid ${T.accent}`},ghost:{...b,background:"transparent",color:T.muted},danger:{...b,background:T.error,color:T.errorTxt,border:`1px solid #f9a5a5`}};
  return<button style={s[v]||s.primary} onClick={onClick}>{children}</button>;
};

const Inp=({label,val,type="text",mono,w})=>(
  <div style={{display:"flex",flexDirection:"column",gap:4,width:w||"100%"}}>
    {label&&<label style={{fontSize:10.5,fontWeight:700,color:T.muted,textTransform:"uppercase",letterSpacing:"0.06em"}}>{label}</label>}
    <input readOnly value={val||""} type={type} style={{fontFamily:mono?fm:f,fontSize:13,padding:"7px 10px",borderRadius:6,border:`1.5px solid ${T.border}`,background:T.white,color:T.text,outline:"none",width:"100%"}}/>
  </div>
);

const Sel=({label,val,w})=>(
  <div style={{display:"flex",flexDirection:"column",gap:4,width:w||"100%"}}>
    {label&&<label style={{fontSize:10.5,fontWeight:700,color:T.muted,textTransform:"uppercase",letterSpacing:"0.06em"}}>{label}</label>}
    <div style={{fontFamily:f,fontSize:13,padding:"7px 10px",borderRadius:6,border:`1.5px solid ${T.border}`,background:T.white,color:T.text,display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer"}}>
      <span>{val}</span><span style={{color:T.muted,fontSize:11}}>▾</span>
    </div>
  </div>
);

const TH=({c})=><th style={{fontFamily:f,fontSize:10.5,fontWeight:700,color:"#fff",background:T.brand,padding:"8px 11px",textAlign:"left",whiteSpace:"nowrap",textTransform:"uppercase",letterSpacing:"0.05em"}}>{c}</th>;
const TD=({c,mono,right,muted,bold,small})=><td style={{fontFamily:mono?fm:f,fontSize:small?11:12.5,padding:"8px 11px",borderBottom:`1px solid ${T.border}`,color:muted?T.muted:T.text,fontWeight:bold?700:400,textAlign:right?"right":"left",whiteSpace:"nowrap"}}>{c}</td>;

const Card=({children,style})=><div style={{background:T.white,borderRadius:8,border:`1px solid ${T.border}`,boxShadow:"0 1px 4px rgba(0,0,0,0.05)",...style}}>{children}</div>;

const KPI=({label,val,trend,up,border})=>(
  <Card style={{padding:"14px 16px",flex:1,minWidth:0,borderLeft:`3px solid ${border||T.accent}`}}>
    <div style={{fontSize:10,fontWeight:700,color:T.muted,textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:6}}>{label}</div>
    <div style={{fontSize:22,fontWeight:700,color:border||T.text,fontFamily:fm,marginBottom:3}}>{val}</div>
    {trend&&<div style={{fontSize:11,color:up?T.successTxt:T.errorTxt,fontWeight:600}}>{up?"▲":"▼"} {trend}</div>}
  </Card>
);

/* ── Shell layout ─────────────────────────────────────────────────────────── */
const NAV=[
  {icon:"⬡",label:"Dashboard",k:"dash"},{icon:"⊹",label:"Administration",k:"admin"},
  {icon:"⚖",label:"Legal (Chombo)",k:"chombo"},{icon:"◈",label:"Finance",k:"finance"},
  {icon:"◉",label:"Human Resources",k:"hr"},{icon:"⊟",label:"GRC",k:"grc"},
  {icon:"◬",label:"Risk",k:"risk"},{icon:"◷",label:"Sales",k:"sales"},
  {icon:"▣",label:"Work",k:"work"},{icon:"⊕",label:"Security",k:"sec"},
  {icon:"⚙",label:"Settings",k:"settings"},
];

const Sidebar=({active})=>(
  <div style={{width:216,background:T.brand,height:"100%",display:"flex",flexDirection:"column",flexShrink:0,overflow:"hidden"}}>
    <div style={{padding:"18px 16px 14px",borderBottom:"1px solid rgba(255,255,255,0.09)"}}>
      <div style={{fontSize:24,fontWeight:800,color:"#fff",letterSpacing:"-0.5px",fontFamily:f}}>UME</div>
      <div style={{fontSize:9.5,color:"rgba(255,255,255,0.42)",letterSpacing:"0.15em",fontWeight:600,marginTop:1}}>BUSINESS OPERATING SYSTEM</div>
    </div>
    <div style={{flex:1,overflowY:"auto",padding:"6px 0"}}>
      {NAV.map(n=>(
        <div key={n.k} style={{padding:"7px 14px",display:"flex",alignItems:"center",gap:9,background:n.k===active?"rgba(255,255,255,0.11)":"transparent",borderLeft:n.k===active?`3px solid ${T.mid}`:"3px solid transparent",cursor:"pointer",marginBottom:1,transition:"all 0.1s"}}>
          <span style={{fontSize:13,color:n.k===active?"#fff":"rgba(255,255,255,0.48)",width:16,textAlign:"center"}}>{n.icon}</span>
          <span style={{fontSize:12.5,fontWeight:n.k===active?600:400,color:n.k===active?"#fff":"rgba(255,255,255,0.52)",fontFamily:f}}>{n.label}</span>
        </div>
      ))}
    </div>
    <div style={{padding:"10px 14px",borderTop:"1px solid rgba(255,255,255,0.09)",display:"flex",alignItems:"center",gap:9}}>
      <div style={{width:26,height:26,borderRadius:99,background:T.accent,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,color:"#fff",flexShrink:0}}>AM</div>
      <div><div style={{fontSize:12,fontWeight:600,color:"#fff",fontFamily:f}}>Alice Mbeki</div><div style={{fontSize:9.5,color:"rgba(255,255,255,0.45)"}}>Org Admin · CFO</div></div>
    </div>
  </div>
);

const TopBar=({crumb,entity="Acme Group",period="Q1 2026"})=>(
  <div style={{height:48,background:T.white,borderBottom:`1px solid ${T.border}`,display:"flex",alignItems:"center",padding:"0 18px",gap:10,flexShrink:0,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"}}>
    <div style={{fontSize:12.5,color:T.muted,flex:1,fontFamily:f}}>{crumb}</div>
    <div style={{display:"flex",alignItems:"center",gap:7}}>
      <div style={{fontSize:12,padding:"4px 10px",borderRadius:6,border:`1.5px solid ${T.border}`,background:T.pale,color:T.accent,fontWeight:600,display:"flex",alignItems:"center",gap:5,fontFamily:f}}>⬡ {entity} <span style={{color:T.muted,fontSize:11}}>▾</span></div>
      <Badge label={period} color="blue"/>
      <div style={{width:28,height:28,borderRadius:6,background:T.pale,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:T.muted,cursor:"pointer"}}>🔍</div>
      <div style={{width:28,height:28,borderRadius:6,background:T.pale,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,color:T.muted,cursor:"pointer",position:"relative"}}>
        🔔<span style={{position:"absolute",top:4,right:4,width:7,height:7,background:T.errorTxt,borderRadius:99}}/>
      </div>
    </div>
  </div>
);

const Shell=({mod,crumb,children,entity,period})=>(
  <div style={{display:"flex",height:"100%",background:T.surface,fontFamily:f}}>
    <Sidebar active={mod}/>
    <div style={{flex:1,display:"flex",flexDirection:"column",minWidth:0,overflow:"hidden"}}>
      <TopBar crumb={crumb} entity={entity} period={period}/>
      <div style={{flex:1,overflowY:"auto",padding:"18px 22px"}} className="fade">{children}</div>
    </div>
  </div>
);

const Head=({title,sub,action})=>(
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
    <div><div style={{fontSize:17,fontWeight:700,color:T.text,fontFamily:f}}>{title}</div>
    {sub&&<div style={{fontSize:12,color:T.muted,marginTop:2}}>{sub}</div>}</div>
    {action}
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════════ */
/* SCREENS                                                                      */
/* ═══════════════════════════════════════════════════════════════════════════ */

/* ── SCR-AUTH-01: Login ───────────────────────────────────────────────────── */
const Login=()=>(
  <div style={{height:"100%",background:`linear-gradient(140deg,${T.brand} 0%,${T.navy2} 60%,#1a3d6b 100%)`,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}} className="fade">
    <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(circle at 70% 30%,rgba(40,120,200,0.15) 0%,transparent 60%)"}}/>
    <div style={{background:T.white,borderRadius:12,padding:"38px 34px",width:370,boxShadow:"0 24px 64px rgba(0,0,0,0.35)",position:"relative"}}>
      <div style={{textAlign:"center",marginBottom:26}}>
        <div style={{fontSize:30,fontWeight:800,color:T.brand,letterSpacing:"-1px",fontFamily:f}}>UME</div>
        <div style={{fontSize:10,color:T.muted,letterSpacing:"0.18em",fontWeight:700,marginTop:2}}>ORGANISATION OPERATING SYSTEM</div>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:13}}>
        <Inp label="Work Email" val="alice@acmegroup.com"/>
        <Inp label="Password" type="password" val="••••••••••"/>
        <div style={{display:"flex",justifyContent:"flex-end",marginTop:-4}}><span style={{fontSize:12,color:T.accent,cursor:"pointer",fontFamily:f}}>Forgot password?</span></div>
        <button style={{background:T.accent,color:"#fff",border:"none",borderRadius:7,padding:"11px",fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:f,letterSpacing:"0.01em"}}>Sign In →</button>
      </div>
      <div style={{margin:"18px 0",textAlign:"center",position:"relative"}}>
        <div style={{height:1,background:T.border,position:"absolute",top:"50%",width:"100%"}}/>
        <span style={{background:"#fff",padding:"0 10px",fontSize:10.5,color:T.muted,position:"relative",fontFamily:f}}>OR CONTINUE WITH SSO</span>
      </div>
      <div style={{display:"flex",gap:8}}>
        {["🔷 Microsoft","  Google Workspace"].map(p=><button key={p} style={{flex:1,padding:"9px",borderRadius:7,border:`1.5px solid ${T.border}`,background:T.surface,fontSize:12,fontWeight:600,color:T.text,cursor:"pointer",fontFamily:f}}>{p}</button>)}
      </div>
      <div style={{textAlign:"center",marginTop:14,fontSize:10.5,color:T.muted,fontFamily:f}}>Protected by UME Security · TLS 1.3 · SOC 2 Type II</div>
    </div>
  </div>
);

/* ── SCR-AUTH-02: MFA ─────────────────────────────────────────────────────── */
const MFA=()=>(
  <div style={{height:"100%",background:`linear-gradient(140deg,${T.brand} 0%,${T.navy2} 60%,#1a3d6b 100%)`,display:"flex",alignItems:"center",justifyContent:"center"}} className="fade">
    <div style={{background:T.white,borderRadius:12,padding:"38px 34px",width:370,boxShadow:"0 24px 64px rgba(0,0,0,0.35)"}}>
      <div style={{textAlign:"center",marginBottom:22}}>
        <div style={{fontSize:30,fontWeight:800,color:T.brand,fontFamily:f}}>UME</div>
        <div style={{fontSize:15,fontWeight:700,color:T.text,marginTop:14,fontFamily:f}}>Two-Factor Verification</div>
        <div style={{fontSize:12,color:T.muted,marginTop:6,fontFamily:f,lineHeight:1.5}}>Enter the 6-digit code from your authenticator app or sent to a•••••@acme.com</div>
      </div>
      <div style={{display:"flex",gap:8,justifyContent:"center",margin:"22px 0"}}>
        {["3","7","","","",""].map((v,i)=>(
          <input key={i} readOnly value={v} maxLength={1} style={{width:42,height:50,textAlign:"center",fontSize:22,fontWeight:700,fontFamily:fm,borderRadius:8,border:`2px solid ${i<2?T.accent:T.border}`,background:i<2?T.pale:"#fff",color:T.text,outline:"none"}}/>
        ))}
      </div>
      <button style={{width:"100%",background:T.accent,color:"#fff",border:"none",borderRadius:7,padding:"11px",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:f,opacity:0.45}}>Verify Code</button>
      <div style={{textAlign:"center",marginTop:14,fontSize:12,color:T.muted,fontFamily:f}}>Didn't receive it? <span style={{color:T.accent,cursor:"pointer",fontWeight:600}}>Resend code</span></div>
      <div style={{textAlign:"center",marginTop:8,fontSize:12,color:T.muted,fontFamily:f}}>← <span style={{color:T.accent,cursor:"pointer"}}>Back to sign in</span></div>
    </div>
  </div>
);

/* ── SCR-AUTH-05: Org Setup Wizard ───────────────────────────────────────── */
const OrgSetup=()=>{
  const steps=["Organisation","First Entity","Invite Team","Modules"];
  return(
    <div style={{height:"100%",background:`linear-gradient(140deg,${T.brand} 0%,${T.navy2} 60%,#1a3d6b 100%)`,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} className="fade">
      <div style={{background:T.white,borderRadius:12,width:"100%",maxWidth:540,boxShadow:"0 24px 64px rgba(0,0,0,0.35)",overflow:"hidden"}}>
        <div style={{background:T.brand,padding:"18px 26px"}}>
          <div style={{fontSize:11.5,fontWeight:700,color:"rgba(255,255,255,0.55)",marginBottom:14,fontFamily:f,letterSpacing:"0.05em"}}>SET UP YOUR ORGANISATION</div>
          <div style={{display:"flex",gap:0,position:"relative"}}>
            <div style={{position:"absolute",top:12,left:"12.5%",right:"12.5%",height:2,background:"rgba(255,255,255,0.15)"}}/>
            {steps.map((s,i)=>(
              <div key={s} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:5,position:"relative",zIndex:1}}>
                <div style={{width:26,height:26,borderRadius:99,background:i===0?T.mid:i<0?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.15)",border:i===0?`2px solid ${T.light}`:"2px solid transparent",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:"#fff"}}>{i<0?"✓":(i+1)}</div>
                <div style={{fontSize:10,color:i===0?"#fff":"rgba(255,255,255,0.38)",fontWeight:i===0?600:400,textAlign:"center",fontFamily:f}}>{s}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{padding:"22px 26px"}}>
          <div style={{fontSize:14.5,fontWeight:700,color:T.text,marginBottom:16,fontFamily:f}}>Tell us about your organisation</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:13}}>
            <div style={{gridColumn:"span 2"}}><Inp label="Organisation Legal Name *" val="Acme Group Ltd"/></div>
            <Sel label="Primary Jurisdiction *" val="England & Wales"/>
            <Sel label="Organisation Type *" val="Private Limited Company"/>
            <Sel label="Primary Sector *" val="Technology & Software"/>
            <Sel label="Approximate Size *" val="50–200 employees"/>
          </div>
          <div style={{marginTop:13,padding:"9px 12px",background:T.pale,borderRadius:6,fontSize:12,color:T.accent,border:`1px solid ${T.light}`,fontFamily:f}}>
            ℹ Your jurisdiction determines which compliance policy packs are automatically activated.
          </div>
          <div style={{display:"flex",justifyContent:"flex-end",gap:8,marginTop:18}}>
            <Btn v="secondary">Back</Btn>
            <Btn>Continue to Entity →</Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── SCR-DASH-01: Executive Dashboard ────────────────────────────────────── */
const Dashboard=()=>(
  <Shell mod="dash" crumb="Home › Executive Dashboard">
    <Head title="Executive Dashboard" sub="Acme Group · Q1 2026 · Refreshed 28s ago"
      action={<Btn v="secondary" sm>⚙ Customise</Btn>}/>
    <div style={{display:"flex",gap:10,marginBottom:14}}>
      <KPI label="Revenue MTD" val="£2.41M" trend="+28.9% vs prior" up border={T.accent}/>
      <KPI label="Cash Runway" val="4.2 mo" trend="−0.8 mo this wk" border={T.errorTxt}/>
      <KPI label="Headcount" val="142" trend="+3 this month" up border={T.successTxt}/>
      <KPI label="Open Risks 🔴" val="3" border={T.errorTxt}/>
      <KPI label="Filings Due 🟡" val="2" border={T.warnTxt}/>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"1.7fr 1fr",gap:10,marginBottom:10}}>
      <Card style={{padding:14}}>
        <div style={{fontSize:10.5,fontWeight:700,color:T.muted,textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:10}}>Revenue — Last 12 Months (£000s)</div>
        <div style={{height:100,display:"flex",alignItems:"flex-end",gap:5}}>
          {[380,420,395,440,410,460,480,510,490,530,560,610].map((v,i)=>(
            <div key={i} style={{flex:1,background:i===11?T.accent:T.light,borderRadius:"3px 3px 0 0",height:`${(v/610)*100}%`,position:"relative",transition:"all 0.2s"}}>
              {i===11&&<div style={{position:"absolute",bottom:"100%",left:"50%",transform:"translateX(-50%)",fontSize:8.5,color:T.accent,fontWeight:700,whiteSpace:"nowrap",marginBottom:2}}>£610K</div>}
            </div>
          ))}
        </div>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:5,fontSize:9.5,color:T.muted}}>
          {["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar"].map(m=><span key={m}>{m}</span>)}
        </div>
      </Card>
      <Card style={{padding:14}}>
        <div style={{fontSize:10.5,fontWeight:700,color:T.muted,textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:10}}>Compliance Status</div>
        {[{bg:T.success,c:T.successTxt,icon:"✅",t:"41 Filed / On Track"},{bg:T.warn,c:T.warnTxt,icon:"🟡",t:"2 Due within 7 days"},{bg:T.gray1,c:T.muted,icon:"○",t:"0 Overdue"}].map(r=>(
          <div key={r.t} style={{background:r.bg,borderRadius:6,padding:"7px 10px",display:"flex",alignItems:"center",gap:7,marginBottom:7}}>
            <span style={{fontSize:12}}>{r.icon}</span><span style={{fontSize:12.5,fontWeight:600,color:r.c,fontFamily:f}}>{r.t}</span>
          </div>
        ))}
        <div style={{marginTop:10,paddingTop:8,borderTop:`1px solid ${T.border}`}}>
          <div style={{fontSize:10.5,color:T.muted,marginBottom:4}}>Next filing due:</div>
          <div style={{fontSize:12,fontWeight:600,color:T.warnTxt,fontFamily:f}}>Annual Return — Acme UK Ltd · 15 Mar 2026</div>
        </div>
      </Card>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
      {[
        {title:"KRI Status",items:[["Cash Runway","4.2 mo","red"],["Employee Turnover","18.2%","amber"],["Open Obligations","4 items","amber"],["System Uptime","99.97%","green"]]},
        {title:"People",items:[["New starters (mo)","3 ✅","green"],["Open roles >30d","1 🟡","amber"],["Certs expiring 30d","2 🟡","amber"],["Leave requests","4 pending","blue"]]},
        {title:"Active Entities",items:[["Acme Group Ltd · UK","Active","green"],["Acme Ireland Ltd · IE","Active","green"],["Acme US Inc · US","Active","green"],["Acme SG Pte · SG","Active","green"]]},
      ].map(widget=>(
        <Card key={widget.title} style={{padding:14}}>
          <div style={{fontSize:10.5,fontWeight:700,color:T.muted,textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:10}}>{widget.title}</div>
          {widget.items.map(([l,v,c])=>(
            <div key={l} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px 0",borderBottom:`1px solid ${T.border}`}}>
              <span style={{fontSize:12,color:T.text,fontFamily:f}}>{l}</span>
              <Badge label={v} color={c}/>
            </div>
          ))}
        </Card>
      ))}
    </div>
  </Shell>
);

/* ── SCR-FIN-02: Journal List ─────────────────────────────────────────────── */
const JournalList=()=>(
  <Shell mod="finance" crumb="Finance › Journal Entries">
    <Head title="Journal Entries" sub="Acme UK Ltd · March 2026"
      action={<div style={{display:"flex",gap:8}}><Btn v="secondary" sm>↑ Import</Btn><Btn sm>+ New Journal</Btn></div>}/>
    <Card>
      <div style={{padding:"10px 14px",background:T.surface,borderBottom:`1px solid ${T.border}`,display:"flex",gap:8,borderRadius:"8px 8px 0 0",alignItems:"center"}}>
        <input readOnly placeholder="Search by ref, narrative…" style={{flex:1,fontSize:12.5,padding:"6px 10px",border:`1.5px solid ${T.border}`,borderRadius:6,fontFamily:f,color:T.muted,background:"#fff"}}/>
        {["All Periods","All Status","All Entities"].map(p=><select key={p} style={{fontSize:12,padding:"5px 9px",border:`1.5px solid ${T.border}`,borderRadius:6,fontFamily:f,color:T.muted}}><option>{p}</option></select>)}
      </div>
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <thead><tr>{["Reference","Date","Narrative","Entity","Period","Debit Total","Status","Posted By",""].map(h=><TH key={h} c={h}/>)}</tr></thead>
        <tbody>
          {[["JE-2026-0041","07/03/2026","Invoice receipt — Supplier 447","Acme UK","Mar 2026","£5,000.00","Posted"],
            ["JE-2026-0040","06/03/2026","Payroll accrual — March","Acme UK","Mar 2026","£124,800.00","Posted"],
            ["JE-2026-0039","05/03/2026","Bank reconciliation","Acme UK","Mar 2026","£8,240.00","Draft"],
            ["JE-2026-0038","04/03/2026","Prepaid expense amortisation","Acme UK","Mar 2026","£1,200.00","Posted"],
            ["JE-2026-0037","03/03/2026","Intercompany loan receipt","Acme UK","Mar 2026","£50,000.00","Posted"],
          ].map(([ref,date,narr,ent,per,amt,stat])=>(
            <tr key={ref} style={{cursor:"pointer",background:"#fff"}} onMouseEnter={e=>e.currentTarget.style.background=T.pale} onMouseLeave={e=>e.currentTarget.style.background="#fff"}>
              <TD c={<span style={{color:T.accent,fontWeight:700,fontFamily:fm}}>{ref}</span>}/>
              <TD c={date} mono/><TD c={narr}/><TD c={ent}/><TD c={per}/>
              <TD c={amt} mono right/><TD c={<Badge label={stat} color={stat==="Posted"?"green":"amber"}/>}/>
              <TD c="A. Mbeki" muted/><TD c={<span style={{color:T.muted}}>⋯</span>}/>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{padding:"8px 14px",fontSize:11.5,color:T.muted,borderTop:`1px solid ${T.border}`,display:"flex",justifyContent:"space-between"}}>
        <span>Showing 5 of 341 journals</span><span style={{color:T.accent,cursor:"pointer"}}>◁  1  2  3 … 69  ▷</span>
      </div>
    </Card>
  </Shell>
);

/* ── SCR-FIN-03: Journal Create ───────────────────────────────────────────── */
const JournalCreate=()=>(
  <Shell mod="finance" crumb="Finance › Journal Entries › New Journal Entry">
    <Head title="New Journal Entry" sub="Acme UK Ltd · March 2026"
      action={<div style={{display:"flex",gap:8}}><Btn v="ghost" sm>Save Draft</Btn><Btn sm>Post Journal ✓</Btn></div>}/>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:12,marginBottom:14}}>
      <Inp label="Reference" val="JE-2026-0042" mono/><Inp label="Date" val="08/03/2026"/>
      <Sel label="Entity" val="Acme UK Ltd"/><Sel label="Period" val="Mar 2026 ✅"/>
    </div>
    <div style={{marginBottom:14}}><Inp label="Narrative / Description" val="Software licence renewal — Microsoft 365 Annual — 1 year prepaid"/></div>
    <Card style={{marginBottom:14}}>
      <div style={{padding:"9px 12px",background:T.surface,borderBottom:`1px solid ${T.border}`,fontSize:10.5,fontWeight:700,color:T.muted,textTransform:"uppercase",letterSpacing:"0.05em",borderRadius:"8px 8px 0 0"}}>Journal Lines</div>
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <thead><tr>{["Line","Account","Department","D/C","Amount (£)","Description","✕"].map(h=>(
          <th key={h} style={{fontSize:10.5,fontWeight:700,color:T.muted,padding:"7px 10px",textAlign:"left",borderBottom:`2px solid ${T.border}`,background:T.surface,textTransform:"uppercase",letterSpacing:"0.04em"}}>{h}</th>
        ))}</tr></thead>
        <tbody>
          {[["1","6200","Software Licences","Technology","Dr","1,800.00","Microsoft 365 Annual"],
            ["2","1100","Bank — Main","—","Cr","1,800.00","Payment to Microsoft"],
          ].map(([ln,code,acc,dept,dc,amt,desc])=>(
            <tr key={ln} style={{borderBottom:`1px solid ${T.border}`}}>
              <td style={{padding:"8px 10px",fontSize:12,color:T.muted,fontFamily:fm,width:40}}>{ln}</td>
              <td style={{padding:"8px 10px"}}><div style={{fontSize:12,fontWeight:700,color:T.accent,fontFamily:fm}}>{code}</div><div style={{fontSize:11.5,color:T.text}}>{acc}</div></td>
              <td style={{padding:"8px 10px",fontSize:12,color:T.muted}}>{dept}</td>
              <td style={{padding:"8px 10px"}}><Badge label={dc} color={dc==="Dr"?"blue":"green"}/></td>
              <td style={{padding:"8px 10px",fontSize:13,fontWeight:600,fontFamily:fm,textAlign:"right"}}>£{amt}</td>
              <td style={{padding:"8px 10px",fontSize:12,color:T.muted}}>{desc}</td>
              <td style={{padding:"8px 10px",fontSize:12,color:T.muted,cursor:"pointer"}}>✕</td>
            </tr>
          ))}
          <tr><td colSpan={7} style={{padding:"7px 10px"}}><span style={{fontSize:12,color:T.accent,cursor:"pointer",fontWeight:600}}>+ Add line</span></td></tr>
        </tbody>
      </table>
      <div style={{padding:"9px 14px",borderTop:`1px solid ${T.border}`,display:"flex",gap:20,background:T.pale,borderRadius:"0 0 8px 8px"}}>
        {[["Debits","£1,800.00",T.text],["Credits","£1,800.00",T.text],["Balance","✅ £0.00 — Balanced",T.successTxt]].map(([l,v,c])=>(
          <div key={l} style={{display:"flex",gap:7,alignItems:"center"}}>
            <span style={{fontSize:10.5,color:T.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.04em"}}>{l}:</span>
            <span style={{fontSize:13.5,fontWeight:700,color:c,fontFamily:fm}}>{v}</span>
          </div>
        ))}
      </div>
    </Card>
    <Card style={{padding:12}}>
      <div style={{fontSize:10.5,fontWeight:700,color:T.muted,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:7}}>Audit Trail</div>
      <div style={{fontSize:12,color:T.muted,fontFamily:f}}>● <span style={{color:T.text,fontWeight:600}}>Draft created</span> · Alice Mbeki · 08/03/2026 11:34:09 GMT · Hash: 3a7f…d942</div>
    </Card>
  </Shell>
);

/* ── SCR-FIN-04: P&L Report ──────────────────────────────────────────────── */
const PLReport=()=>(
  <Shell mod="finance" crumb="Finance › Reports › Profit & Loss">
    <Head title="Profit & Loss Statement" sub="Acme Group (Consolidated) · YTD March 2026"
      action={<div style={{display:"flex",gap:8}}><Btn v="secondary" sm>⇩ XLSX</Btn><Btn v="secondary" sm>⇩ PDF</Btn></div>}/>
    <div style={{display:"flex",gap:10,marginBottom:14,flexWrap:"wrap"}}>
      <Sel label="Entity" val="Acme Group (Consolidated)" w={210}/><Sel label="Period" val="YTD Mar 2026" w={150}/><Sel label="Compare With" val="YTD Mar 2025" w={155}/><Sel label="Format" val="Management Accounts" w={175}/>
    </div>
    <Card>
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <thead><tr>
          <th style={{fontFamily:f,fontSize:10.5,fontWeight:700,color:"#fff",background:T.brand,padding:"8px 12px",textAlign:"left",width:"45%"}}>Account / Category</th>
          {["YTD 2026 (£000)","YTD 2025 (£000)","Variance (£000)","Var %"].map(h=><th key={h} style={{fontFamily:f,fontSize:10.5,fontWeight:700,color:"#fff",background:T.brand,padding:"8px 12px",textAlign:"right"}}>{h}</th>)}
        </tr></thead>
        <tbody>
          {[["REVENUE",null,null,null,null,true],
            ["  Product Revenue [▸]","2,410","1,840","570","▲ +31.0%",false],
            ["  Service Revenue [▸]","890","720","170","▲ +23.6%",false],
            ["Total Revenue","3,300","2,560","740","▲ +28.9%",false,true],
            ["COST OF SALES [▸]","(1,150)","(880)","(270)","▼ +30.7%",false],
            ["GROSS PROFIT","2,150","1,680","470","▲ +28.0%",false,true],
            ["Gross Margin %","65.2%","65.6%","","△ -0.4pp",false],
            ["OPERATING EXPENSES [▸]","(1,680)","(1,320)","(360)","▼ +27.3%",false],
            ["EBITDA","470","360","110","▲ +30.6%",false,true],
            ["EBITDA Margin %","14.2%","14.1%","","△ +0.1pp",false],
          ].map(([label,y26,y25,varA,varP,isH,isT],i)=>(
            <tr key={i} style={{background:isH?T.brand:isT?T.pale:"#fff"}}>
              <td style={{padding:"8px 12px",fontFamily:f,fontSize:isH?10.5:12.5,fontWeight:isT||isH?700:400,color:isH?"#fff":T.text,textTransform:isH?"uppercase":"none",letterSpacing:isH?"0.07em":"0",paddingLeft:label&&label.startsWith("  ")?"22px":"12px"}}>{label&&label.trim()}</td>
              {[y26,y25,varA,varP].map((v,j)=>(
                <td key={j} style={{padding:"8px 12px",fontFamily:j<=2?fm:f,fontSize:12.5,fontWeight:isT?700:400,color:isH?"transparent":j===3?(v?.startsWith("▲")?T.successTxt:v?.startsWith("▼")?T.errorTxt:T.muted):T.text,textAlign:"right"}}>{v}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
    <div style={{marginTop:8,fontSize:11.5,color:T.muted,fontFamily:f}}>💡 Click [▸] to expand any category to account level. Click any account line to view journal entries.</div>
  </Shell>
);

/* ── SCR-CHM-01: Entity Registry ─────────────────────────────────────────── */
const EntityRegistry=()=>(
  <Shell mod="chombo" crumb="Legal (Chombo) › Entity Registry">
    <Head title="Entity Registry" sub="12 entities · 6 jurisdictions · 43 active obligations"
      action={<Btn sm>+ Register Entity</Btn>}/>
    <div style={{display:"flex",gap:10,marginBottom:14}}>
      {[["12","Entities"],["6","Jurisdictions"],["43","Obligations"],["2","Due Soon 🟡"]].map(([v,l])=>(
        <Card key={l} style={{padding:"10px 14px",flex:1,textAlign:"center",cursor:"pointer"}}>
          <div style={{fontSize:20,fontWeight:700,color:T.accent,fontFamily:fm}}>{v}</div>
          <div style={{fontSize:10.5,color:T.muted,fontWeight:600,marginTop:3}}>{l}</div>
        </Card>
      ))}
    </div>
    <Card>
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <thead><tr>{["Entity Name","Type","Reg No","Jurisdiction","Parent","Status","Obligations","Next Filing",""].map(h=><TH key={h} c={h}/>)}</tr></thead>
        <tbody>
          {[["Acme Group Ltd","Private Ltd","12345678","England & Wales","—","Active","12","15 Mar 2026","amber"],
            ["Acme Ireland Ltd","Private Ltd","IE654321","Republic of Ireland","Acme Group","Active","8","30 Jun 2026","green"],
            ["Acme US Inc","C-Corp","DE-987654","Delaware, USA","Acme Group","Active","11","15 Apr 2026","green"],
            ["Acme SG Pte Ltd","Private Ltd","SG-112233","Singapore","Acme Group","Active","7","30 Apr 2026","green"],
            ["Acme Foundation","Charity","CT-445566","England & Wales","—","Active","5","31 Jan 2027","green"],
          ].map(([n,t,r,j,p,s,o,next,c])=>(
            <tr key={n} style={{background:"#fff",cursor:"pointer"}} onMouseEnter={e=>e.currentTarget.style.background=T.pale} onMouseLeave={e=>e.currentTarget.style.background="#fff"}>
              <TD c={<span style={{color:T.accent,fontWeight:700}}>{n}</span>}/>
              <TD c={t}/><TD c={r} mono/><TD c={j}/><TD c={p} muted/><TD c={<Badge label={s} color="green"/>}/>
              <TD c={o} mono right/><TD c={<span style={{color:c==="amber"?T.warnTxt:T.successTxt,fontSize:12,fontWeight:600}}>{next}{c==="amber"?" 🟡":""}</span>}/>
              <TD c={<span style={{color:T.muted}}>⋯</span>}/>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  </Shell>
);

/* ── SCR-CHM-03: Filing Calendar ─────────────────────────────────────────── */
const FilingCalendar=()=>(
  <Shell mod="chombo" crumb="Legal (Chombo) › Filing Calendar">
    <Head title="Filing Calendar" sub="All entities · Next 90 days"
      action={<div style={{display:"flex",gap:8}}><Btn v="secondary" sm>📅 Calendar View</Btn><Btn sm>+ Add Filing</Btn></div>}/>
    <div style={{display:"flex",gap:8,marginBottom:12}}>
      {["All Entities ▾","All Types ▾","Next 90 days ▾","All Assignees ▾"].map(f2=><div key={f2} style={{fontSize:12,padding:"5px 10px",borderRadius:6,border:`1.5px solid ${T.border}`,background:T.white,color:T.muted,cursor:"pointer",fontFamily:f,fontWeight:500}}>{f2}</div>)}
    </div>
    <div style={{display:"flex",gap:10,marginBottom:12}}>
      {[["🔴","0","Overdue",T.error,T.errorTxt],["🟡","2","Due Soon",T.warn,T.warnTxt],["✅","18","Upcoming",T.pale,T.accent]].map(([ic,n,l,bg,c])=>(
        <div key={l} style={{background:bg,borderRadius:8,padding:"8px 14px",display:"flex",alignItems:"center",gap:7,cursor:"pointer",border:`1px solid ${c}33`,flex:1,justifyContent:"center"}}>
          <span style={{fontSize:14}}>{ic}</span><span style={{fontSize:13,fontWeight:700,color:c,fontFamily:f}}>{n} {l}</span>
        </div>
      ))}
    </div>
    <div style={{display:"flex",flexDirection:"column",gap:10}}>
      {[{c:"amber",title:"Annual Return — Acme UK Ltd",sub:"Companies House · England & Wales · Annual Report",due:"15 Mar 2026",days:"7 days",who:"Sarah Chen",ev:0},
        {c:"amber",title:"VAT Return Q4 2025 — Acme UK Ltd",sub:"HMRC VAT100 · England & Wales · Quarterly VAT",due:"07 Apr 2026",days:"30 days",who:"Tom Patel",ev:1},
        {c:"green",title:"Annual Accounts — Acme Ireland Ltd",sub:"CRO Annual Filing · Republic of Ireland",due:"30 Jun 2026",days:"115 days",who:"Sarah Chen",ev:0},
        {c:"green",title:"Corporate Tax Return — Acme US Inc",sub:"IRS Form 1120 · Federal · Annual",due:"15 Apr 2026",days:"38 days",who:"External CPA",ev:2},
      ].map(fi=>(
        <Card key={fi.title} style={{padding:14,borderLeft:`4px solid ${fi.c==="amber"?T.warnTxt:T.successTxt}`}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
            <div style={{flex:1}}>
              <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:5}}>
                <Badge label={`Due ${fi.due}`} color={fi.c}/>
                <Badge label={fi.days} color={fi.c==="amber"?"amber":"gray"}/>
              </div>
              <div style={{fontSize:13.5,fontWeight:700,color:T.text,marginBottom:3,fontFamily:f}}>{fi.title}</div>
              <div style={{fontSize:12,color:T.muted,fontFamily:f}}>{fi.sub}</div>
              <div style={{marginTop:7,fontSize:12,color:T.muted,fontFamily:f}}>Assigned: <span style={{fontWeight:600,color:T.text}}>{fi.who}</span> · Evidence: <span style={{fontWeight:600,color:fi.ev>0?T.successTxt:T.muted}}>{fi.ev} file{fi.ev!==1?"s":""} attached</span></div>
            </div>
            <div style={{display:"flex",gap:6,marginLeft:14,flexShrink:0}}>
              <Btn v="secondary" sm>View</Btn><Btn v="secondary" sm>📎 Evidence</Btn><Btn sm>✓ Mark Filed</Btn>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </Shell>
);

/* ── SCR-HR-01: Employee Directory ───────────────────────────────────────── */
const EmployeeDir=()=>(
  <Shell mod="hr" crumb="Human Resources › Employee Directory">
    <Head title="Employee Directory" sub="142 active · 3 pre-start · 2 on notice"
      action={<div style={{display:"flex",gap:8}}><Btn v="secondary" sm>↑ Import CSV</Btn><Btn sm>+ New Employee</Btn></div>}/>
    <div style={{display:"flex",gap:10,marginBottom:12}}>
      {[["142","Active"],["3","Pre-Start"],["2","Notice"],["8","Contractors"]].map(([v,l])=>(
        <Card key={l} style={{padding:"9px 12px",flex:1,textAlign:"center",cursor:"pointer"}}>
          <div style={{fontSize:19,fontWeight:700,color:T.accent,fontFamily:fm}}>{v}</div>
          <div style={{fontSize:10.5,color:T.muted,fontWeight:600,marginTop:2}}>{l}</div>
        </Card>
      ))}
    </div>
    <Card>
      <div style={{padding:"9px 14px",background:T.surface,borderBottom:`1px solid ${T.border}`,display:"flex",gap:8,borderRadius:"8px 8px 0 0",alignItems:"center"}}>
        <input readOnly placeholder="Search employees…" style={{flex:1,fontSize:12.5,padding:"5px 10px",border:`1.5px solid ${T.border}`,borderRadius:6,fontFamily:f,background:"#fff",color:T.muted}}/>
        {["All Departments","All Status","All Locations"].map(p=><select key={p} style={{fontSize:11.5,padding:"5px 9px",border:`1.5px solid ${T.border}`,borderRadius:6,fontFamily:f,color:T.muted}}><option>{p}</option></select>)}
      </div>
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <thead><tr>{["Employee","Emp ID","Department","Job Title","Manager","Location","Status","Start Date",""].map(h=><TH key={h} c={h}/>)}</tr></thead>
        <tbody>
          {[["Alice Mbeki","AM","EMP-001","Finance","CFO","—","London","Active","Jan 2023"],
            ["James Okafor","JO","EMP-142","Engineering","Sr. Engineer","T. Patel","Remote","Pre-Start","15 Apr"],
            ["Sarah Chen","SC","EMP-098","Legal","Compliance Mgr","A. Mbeki","London","Active","Mar 2021"],
            ["Tom Patel","TP","EMP-034","Engineering","VP Engineering","CEO","Remote","Active","Sep 2021"],
            ["Carol Davis","CD","EMP-067","HR","HR Manager","A. Mbeki","London","Active","Jun 2020"],
          ].map(([n,av,id,dept,title,mgr,loc,stat,date])=>(
            <tr key={id} style={{background:"#fff",cursor:"pointer"}} onMouseEnter={e=>e.currentTarget.style.background=T.pale} onMouseLeave={e=>e.currentTarget.style.background="#fff"}>
              <TD c={<div style={{display:"flex",alignItems:"center",gap:8}}>
                <div style={{width:26,height:26,borderRadius:99,background:T.accent,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9.5,fontWeight:700,color:"#fff",flexShrink:0}}>{av}</div>
                <span style={{fontWeight:600,color:T.accent,fontFamily:f}}>{n}</span>
              </div>}/>
              <TD c={id} mono small/><TD c={dept}/><TD c={title}/><TD c={mgr} muted/><TD c={loc}/>
              <TD c={<Badge label={stat} color={stat==="Active"?"green":stat==="Pre-Start"?"amber":"gray"}/>}/>
              <TD c={date} mono muted/><TD c={<span style={{color:T.muted}}>⋯</span>}/>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{padding:"8px 14px",fontSize:11.5,color:T.muted,borderTop:`1px solid ${T.border}`,display:"flex",justifyContent:"space-between"}}>
        <span>Showing 5 of 142 employees</span><span style={{color:T.accent,cursor:"pointer"}}>◁  1  2  3 … 29  ▷</span>
      </div>
    </Card>
  </Shell>
);

/* ── SCR-HR-03: New Hire Wizard ──────────────────────────────────────────── */
const NewHire=()=>{
  const steps=["Personal","Role","Compensation","Access","Review"];
  return(
    <Shell mod="hr" crumb="Human Resources › Employees › New Employee">
      <div style={{maxWidth:660}}>
        <Head title="New Employee — Step 1 of 5" sub="Personal Information"
          action={<Btn v="ghost" sm>✕ Cancel</Btn>}/>
        <Card style={{marginBottom:14,overflow:"hidden"}}>
          <div style={{background:T.brand,padding:"12px 20px",display:"flex",gap:0}}>
            {steps.map((s,i)=>(
              <div key={s} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4}}>
                <div style={{width:24,height:24,borderRadius:99,background:i===0?T.mid:"rgba(255,255,255,0.14)",border:i===0?`2px solid ${T.light}`:"2px solid transparent",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:"#fff"}}>{i===0?"●":(i+1)}</div>
                <div style={{fontSize:9.5,color:i===0?"#fff":"rgba(255,255,255,0.4)",fontWeight:i===0?600:400,textAlign:"center",fontFamily:f}}>{s}</div>
              </div>
            ))}
          </div>
          <div style={{padding:20}}>
            <div style={{fontSize:14,fontWeight:700,color:T.text,marginBottom:15,fontFamily:f}}>Personal Information</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:13}}>
              <Inp label="First Name *" val="James"/><Inp label="Last Name *" val="Okafor"/>
              <Inp label="Personal Email *" val="james@gmail.com"/><Inp label="Employee ID (auto)" val="EMP-2026-0142" mono/>
              <Inp label="Start Date *" val="15 Apr 2026"/><Sel label="Employment Type *" val="Full-time permanent"/>
              <Sel label="Nationality *" val="British"/><Sel label="Right to Work *" val="Verified — British Citizen"/>
            </div>
            <div style={{marginTop:13,padding:"8px 11px",background:T.pale,borderRadius:6,fontSize:12,color:T.accent,border:`1px solid ${T.light}`,fontFamily:f}}>ℹ Employee ID is auto-generated and used across all payroll, HR, and access systems.</div>
          </div>
        </Card>
        <div style={{display:"flex",justifyContent:"flex-end",gap:8}}><Btn v="secondary">Back</Btn><Btn>Continue to Role →</Btn></div>
      </div>
    </Shell>
  );
};

/* ── SCR-HR-05: Leave Management ─────────────────────────────────────────── */
const LeaveManagement=()=>(
  <Shell mod="hr" crumb="Human Resources › Leave Management">
    <Head title="Leave Management" sub="Leave requests awaiting your action"
      action={<Btn sm>+ New Leave Request</Btn>}/>
    <div style={{display:"flex",gap:10,marginBottom:12}}>
      {[["4","Pending",T.warn,T.warnTxt],["12","Approved (Mar)",T.success,T.successTxt],["1","Declined",T.error,T.errorTxt]].map(([v,l,bg,c])=>(
        <Card key={l} style={{padding:"10px 14px",flex:1,textAlign:"center",background:bg,border:`1px solid ${c}30`}}>
          <div style={{fontSize:19,fontWeight:700,color:c,fontFamily:fm}}>{v}</div>
          <div style={{fontSize:10.5,fontWeight:600,color:c,marginTop:2}}>{l}</div>
        </Card>
      ))}
    </div>
    <Card>
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <thead><tr>{["Employee","Leave Type","From","To","Days","Requested","Status","Actions"].map(h=><TH key={h} c={h}/>)}</tr></thead>
        <tbody>
          {[["James Okafor","Annual Leave","24 Mar","26 Mar","3","07/03","Pending"],
            ["Carol Davis","Annual Leave","30 Mar","04 Apr","5","06/03","Pending"],
            ["Bob Chen","Sick Leave","05 Mar","07 Mar","3","05/03","Approved"],
            ["Sarah Chen","Compassionate","10 Mar","11 Mar","2","04/03","Approved"],
          ].map(([n,t,fr,to,d,req,stat])=>(
            <tr key={n+fr} style={{background:"#fff"}} onMouseEnter={e=>e.currentTarget.style.background=T.pale} onMouseLeave={e=>e.currentTarget.style.background="#fff"}>
              <TD c={n} bold/><TD c={t}/><TD c={fr} mono/><TD c={to} mono/><TD c={d} mono right/><TD c={req} mono muted/>
              <TD c={<Badge label={stat} color={stat==="Pending"?"amber":stat==="Approved"?"green":"red"}/>}/>
              <td style={{padding:"7px 11px"}}>
                {stat==="Pending"?<div style={{display:"flex",gap:5}}><Btn sm>✓ Approve</Btn><Btn v="secondary" sm>✕ Decline</Btn></div>:<Btn v="ghost" sm>View</Btn>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  </Shell>
);

/* ── SCR-RSK-03: KRI Dashboard ───────────────────────────────────────────── */
const KRIDash=()=>(
  <Shell mod="risk" crumb="Risk › KRI Dashboard">
    <Head title="KRI Dashboard" sub="Live data · Updated from operational modules · 4 min ago"
      action={<div style={{display:"flex",gap:8}}><Btn v="secondary" sm>Configure</Btn><Btn sm>+ Add KRI</Btn></div>}/>
    <div style={{display:"flex",gap:8,marginBottom:14,padding:"9px 12px",background:T.pale,borderRadius:8,border:`1px solid ${T.light}`,alignItems:"center"}}>
      <Badge label="🔴 1 Red" color="red"/><Badge label="🟡 4 Amber" color="amber"/><Badge label="✅ 18 Green" color="green"/>
      <span style={{marginLeft:"auto",fontSize:11.5,color:T.muted,fontFamily:f}}>Last alert: 07/03/2026 09:14 → CFO + CEO</span>
    </div>
    <div style={{fontSize:10.5,fontWeight:700,color:T.errorTxt,textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:8}}>🔴 Critical Threshold Breached</div>
    <Card style={{marginBottom:14,borderLeft:`4px solid ${T.errorTxt}`}}>
      <div style={{padding:"13px 16px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div style={{flex:1}}>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:7}}>
              <Badge label="CRITICAL" color="red"/>
              <span style={{fontSize:14.5,fontWeight:700,color:T.text,fontFamily:f}}>Cash Runway</span>
              <span style={{fontSize:12,color:T.muted,fontFamily:f}}>Owner: Alice Mbeki (CFO)</span>
            </div>
            <div style={{display:"flex",gap:16,alignItems:"baseline",marginBottom:8}}>
              <div><span style={{fontSize:28,fontWeight:700,color:T.errorTxt,fontFamily:fm}}>4.2</span><span style={{fontSize:14,color:T.errorTxt,fontFamily:fm}}> months</span></div>
              <span style={{fontSize:12.5,color:T.errorTxt,fontWeight:600}}>▼ 0.8 mo vs last week</span>
              <span style={{fontSize:11.5,color:T.muted}}>Red threshold: &lt; 5 months</span>
            </div>
            <div style={{display:"flex",alignItems:"flex-end",gap:3,height:36,background:T.pale,borderRadius:6,padding:"4px 6px"}}>
              {[6.8,6.5,6.1,5.9,5.5,5.2,5.0,4.8,4.5,4.4,4.3,4.2].map((v,i)=>(
                <div key={i} style={{flex:1,background:v<5?T.error:T.light,borderRadius:"2px 2px 0 0",height:`${(v/7)*100}%`,position:"relative"}}>
                  {i===11&&<div style={{position:"absolute",bottom:"103%",left:"50%",transform:"translateX(-50%)",fontSize:8,color:T.errorTxt,fontWeight:700,whiteSpace:"nowrap"}}>4.2</div>}
                </div>
              ))}
            </div>
            <div style={{marginTop:6,fontSize:11,color:T.errorTxt,fontFamily:f}}>⚠ Alert dispatched 07/03/2026 09:14 — awaiting CFO + CEO response</div>
          </div>
          <div style={{display:"flex",gap:6,marginLeft:14}}><Btn v="secondary" sm>View Risk</Btn><Btn sm>Notify Sponsor</Btn></div>
        </div>
      </div>
    </Card>
    <div style={{fontSize:10.5,fontWeight:700,color:T.warnTxt,textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:8}}>🟡 Amber — Approaching Threshold</div>
    {[{name:"Employee Turnover (TTM)",val:"18.2%",trend:"▲ 2.1%",sub:"Amber >15% · Red >25%",owner:"CHRO"},
      {name:"Open Compliance Items >30d",val:"4 items",trend:"▲ 1 item",sub:"Amber >3 · Red >7",owner:"Legal Officer"},
      {name:"Accounts Receivable Overdue >60d",val:"£42K",trend:"▲ £8K",sub:"Amber >£30K · Red >£100K",owner:"Finance Manager"},
    ].map(k=>(
      <Card key={k.name} style={{marginBottom:8,borderLeft:`4px solid ${T.warnTxt}`,padding:"12px 16px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div>
            <div style={{fontSize:13.5,fontWeight:600,color:T.text,marginBottom:3,fontFamily:f}}>{k.name} <span style={{fontSize:11.5,color:T.muted,fontWeight:400}}>· Owner: {k.owner}</span></div>
            <div style={{display:"flex",gap:12,alignItems:"baseline"}}>
              <span style={{fontSize:19,fontWeight:700,color:T.warnTxt,fontFamily:fm}}>{k.val}</span>
              <span style={{fontSize:12,color:T.warnTxt,fontWeight:600}}>{k.trend} vs prior period</span>
              <span style={{fontSize:11,color:T.muted}}>{k.sub}</span>
            </div>
          </div>
          <Btn v="secondary" sm>View →</Btn>
        </div>
      </Card>
    ))}
    <div style={{padding:"9px 12px",background:T.gray1,borderRadius:8,cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <span style={{fontSize:12.5,fontWeight:600,color:T.muted,fontFamily:f}}>✅ 18 Green KRIs</span>
      <span style={{fontSize:12,color:T.accent}}>Show all ▾</span>
    </div>
  </Shell>
);

/* ── SCR-RSK-01: Risk Register ───────────────────────────────────────────── */
const RiskRegister=()=>(
  <Shell mod="risk" crumb="Risk › Risk Register">
    <Head title="Risk Register" sub="23 active risks · Last reviewed 07/03/2026"
      action={<div style={{display:"flex",gap:8}}><Btn v="secondary" sm>Export</Btn><Btn sm>+ Add Risk</Btn></div>}/>
    <Card>
      <div style={{padding:"9px 14px",background:T.surface,borderBottom:`1px solid ${T.border}`,display:"flex",gap:8,borderRadius:"8px 8px 0 0"}}>
        {["All Categories","All Ratings","All Owners"].map(p=><select key={p} style={{fontSize:11.5,padding:"5px 9px",border:`1.5px solid ${T.border}`,borderRadius:6,fontFamily:f,color:T.muted}}><option>{p}</option></select>)}
      </div>
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <thead><tr>{["ID","Risk Title","Category","Inherent","Residual","Rating","Owner","Treatment",""].map(h=><TH key={h} c={h}/>)}</tr></thead>
        <tbody>
          {[["RSK-001","Cash runway falls below threshold","Financial","Critical","High","🔴 Red","CFO","Mitigate"],
            ["RSK-007","Employee turnover exceeds benchmark","HR","High","Medium","🟡 Amber","CHRO","Mitigate"],
            ["RSK-014","Annual Return filing missed","Compliance","Medium","Low","🟡 Amber","Legal Officer","Accept"],
            ["RSK-019","Key-person dependency — CTO","Operational","High","Medium","🟡 Amber","CEO","Mitigate"],
            ["RSK-022","Supplier concentration >40%","Operational","Medium","Low","✅ Green","COO","Transfer"],
          ].map(([id,title,cat,inh,res,rat,own,trt])=>(
            <tr key={id} style={{background:"#fff",cursor:"pointer"}} onMouseEnter={e=>e.currentTarget.style.background=T.pale} onMouseLeave={e=>e.currentTarget.style.background="#fff"}>
              <TD c={<span style={{color:T.accent,fontWeight:700,fontFamily:fm}}>{id}</span>}/>
              <TD c={title} bold/><TD c={cat}/>
              <TD c={<Badge label={inh} color={inh==="Critical"?"red":"amber"}/>}/>
              <TD c={<Badge label={res} color={res==="High"?"red":res==="Medium"?"amber":"green"}/>}/>
              <TD c={<span style={{fontSize:13,fontWeight:700}}>{rat}</span>}/>
              <TD c={own}/><TD c={<Badge label={trt} color={trt==="Mitigate"?"blue":trt==="Transfer"?"green":"gray"}/>}/>
              <TD c={<span style={{color:T.muted}}>⋯</span>}/>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  </Shell>
);

/* ── SCR-WRK-01: Sprint Board ────────────────────────────────────────────── */
const SprintBoard=()=>{
  const cols=[
    {title:"TO DO",col:T.muted,items:[{id:"WI-0241",t:"Entity compliance calendar UX",p:3,w:"SC",due:"15 Mar",urg:false},{id:"WI-0242",t:"Policy acknowledgment flow",p:2,w:"CD",due:"18 Mar",urg:false},{id:"WI-0243",t:"Dashboard KPI drill-down",p:5,w:"TP",due:"21 Mar",urg:false}]},
    {title:"IN PROGRESS",col:T.accent,items:[{id:"WI-0238",t:"KRI dashboard redesign",p:5,w:"TP",due:"10 Mar",urg:true},{id:"WI-0239",t:"Payroll run Q1 2026",p:8,w:"AM",due:"08 Mar",urg:true}]},
    {title:"IN REVIEW",col:T.warnTxt,items:[{id:"WI-0235",t:"Filing alert email template",p:2,w:"JO",due:"09 Mar",urg:false},{id:"WI-0236",t:"Leave approval automation",p:1,w:"BC",due:"07 Mar",urg:false}]},
    {title:"DONE",col:T.successTxt,items:[{id:"WI-0230",t:"Entity registry MVP",p:8,w:"SC",due:"04 Mar",urg:false},{id:"WI-0231",t:"Journal audit chain",p:5,w:"TP",due:"03 Mar",urg:false}]},
  ];
  return(
    <Shell mod="work" crumb="Work › Sprint 14 — Q1 Compliance Push">
      <Head title="Sprint 14 — Q1 Compliance Push" sub="7–21 Mar 2026 · 18 points remaining · 4 team members"
        action={<div style={{display:"flex",gap:8}}><Btn v="secondary" sm>Backlog</Btn><Btn v="secondary" sm>Burndown</Btn><Btn sm>+ Work Item</Btn></div>}/>
      <div style={{display:"flex",gap:10,minHeight:400}}>
        {cols.map(col=>(
          <div key={col.title} style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:8}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:2}}>
              <span style={{fontSize:10.5,fontWeight:700,color:col.col,textTransform:"uppercase",letterSpacing:"0.07em"}}>{col.title}</span>
              <span style={{fontSize:10.5,fontWeight:600,color:T.muted,background:T.gray1,borderRadius:99,padding:"1px 7px"}}>{col.items.length}</span>
            </div>
            <div style={{borderTop:`2px solid ${col.col}`,paddingTop:8,display:"flex",flexDirection:"column",gap:7}}>
              {col.items.map(item=>(
                <Card key={item.id} style={{padding:11,cursor:"pointer",borderLeft:item.urg?`3px solid ${T.errorTxt}`:"3px solid transparent"}}>
                  <div style={{fontSize:9.5,color:T.muted,fontFamily:fm,marginBottom:4}}>{item.id}</div>
                  <div style={{fontSize:12.5,fontWeight:600,color:T.text,marginBottom:7,lineHeight:1.35,fontFamily:f}}>{item.t}</div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <div style={{display:"flex",alignItems:"center",gap:6}}>
                      <div style={{width:18,height:18,borderRadius:99,background:T.accent,display:"flex",alignItems:"center",justifyContent:"center",fontSize:8.5,fontWeight:700,color:"#fff"}}>{item.w}</div>
                      <span style={{fontSize:10.5,color:T.muted,fontFamily:fm}}>{item.p}p</span>
                    </div>
                    <span style={{fontSize:10.5,color:item.urg?T.errorTxt:T.muted,fontWeight:item.urg?700:400}}>{item.urg?"🔴 ":""}{item.due}</span>
                  </div>
                </Card>
              ))}
              <div style={{padding:"7px",border:`1.5px dashed ${T.border}`,borderRadius:6,textAlign:"center",fontSize:11.5,color:T.muted,cursor:"pointer",fontFamily:f}}>+ Add</div>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
};

/* ── SCR-GRC-01: Obligation Register ─────────────────────────────────────── */
const ObligationRegister=()=>(
  <Shell mod="grc" crumb="GRC › Obligation Register">
    <Head title="Obligation Register" sub="47 active obligations · 3 frameworks · 8 controls linked"
      action={<div style={{display:"flex",gap:8}}><Btn v="secondary" sm>Import Framework</Btn><Btn sm>+ Add Obligation</Btn></div>}/>
    <div style={{display:"flex",gap:10,marginBottom:12}}>
      {[["47","Active"],["12","Due Review"],["3","Overdue"],["8","Controls"]].map(([v,l])=>(
        <Card key={l} style={{padding:"9px 12px",flex:1,textAlign:"center"}}><div style={{fontSize:19,fontWeight:700,color:T.accent,fontFamily:fm}}>{v}</div><div style={{fontSize:10.5,color:T.muted,fontWeight:600,marginTop:2}}>{l}</div></Card>
      ))}
    </div>
    <Card>
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <thead><tr>{["ID","Title","Framework","Owner","Due","Status","Controls","Risk",""].map(h=><TH key={h} c={h}/>)}</tr></thead>
        <tbody>
          {[["OBL-001","GDPR Art. 30 — RoPA Maintenance","GDPR","DPO","Ongoing","Active","3","RSK-008"],
            ["OBL-007","ISO 27001 A.12.1 — Change Mgmt","ISO 27001","CISO","30 Jun 2026","Due Review","2","RSK-015"],
            ["OBL-012","SOX 302 — CEO/CFO Certification","SOX","CFO","31 Dec 2026","Active","1","RSK-003"],
            ["OBL-019","GDPR Art. 33 — Breach Notification","GDPR","DPO","Ongoing","Active","1","RSK-021"],
            ["OBL-024","PCI DSS 8.3 — MFA for Admin","PCI DSS","IT Admin","Overdue","Overdue","2","RSK-017"],
          ].map(([id,title,fw,own,due,stat,c2,risk])=>(
            <tr key={id} style={{background:"#fff",cursor:"pointer"}} onMouseEnter={e=>e.currentTarget.style.background=T.pale} onMouseLeave={e=>e.currentTarget.style.background="#fff"}>
              <TD c={<span style={{color:T.accent,fontWeight:700,fontFamily:fm}}>{id}</span>}/>
              <TD c={title} bold/><TD c={<Badge label={fw} color={fw==="GDPR"?"blue":fw==="ISO 27001"?"navy":"amber"}/>}/>
              <TD c={own}/><TD c={due} mono muted/>
              <TD c={<Badge label={stat} color={stat==="Active"?"green":stat==="Due Review"?"amber":"red"}/>}/>
              <TD c={c2} mono right/><TD c={<span style={{color:T.accent,fontSize:12,fontWeight:600}}>{risk}</span>}/>
              <TD c={<span style={{color:T.muted}}>⋯</span>}/>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  </Shell>
);

/* ── SCR-SAL-01: Sales Pipeline ──────────────────────────────────────────── */
const SalesPipeline=()=>{
  const stages=[
    {title:"Prospecting",val:"£180K",col:T.muted,items:[{n:"TechCorp Ltd",v:"£45K",p:"PZ"},{n:"RetailCo Group",v:"£28K",p:"MO"},{n:"FinServ Partners",v:"£107K",p:"PZ"}]},
    {title:"Qualified",val:"£320K",col:T.accent,items:[{n:"MediHealth Group",v:"£120K",p:"AS"},{n:"LogiFlow Inc",v:"£80K",p:"MO"},{n:"BuildRight Ltd",v:"£120K",p:"PZ"}]},
    {title:"Proposal",val:"£240K",col:T.warnTxt,items:[{n:"ClearView Capital",v:"£95K",p:"AS"},{n:"NovaTech",v:"£145K",p:"PZ"}]},
    {title:"Negotiation",val:"£160K",col:T.mid,items:[{n:"AquaFresh Corp",v:"£65K",p:"MO"},{n:"Greenfield VC",v:"£95K",p:"AS"}]},
    {title:"Closed Won",val:"£85K",col:T.successTxt,items:[{n:"BrightPath Edu",v:"£35K",p:"MO"},{n:"Pinnacle HR",v:"£50K",p:"AS"}]},
  ];
  return(
    <Shell mod="sales" crumb="Sales › Pipeline">
      <Head title="Sales Pipeline" sub="Q1 2026 · £985K total · 15 open opportunities"
        action={<div style={{display:"flex",gap:8}}><Btn v="secondary" sm>List View</Btn><Btn sm>+ Opportunity</Btn></div>}/>
      <div style={{display:"flex",gap:8}}>
        {stages.map(stage=>(
          <div key={stage.title} style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:7}}>
            <div style={{marginBottom:3}}>
              <div style={{fontSize:10,fontWeight:700,color:stage.col,textTransform:"uppercase",letterSpacing:"0.07em"}}>{stage.title}</div>
              <div style={{fontSize:13,fontWeight:700,color:T.text,fontFamily:fm,marginTop:2}}>{stage.val}</div>
            </div>
            <div style={{borderTop:`2px solid ${stage.col}`,paddingTop:8,display:"flex",flexDirection:"column",gap:7}}>
              {stage.items.map(item=>(
                <Card key={item.n} style={{padding:10,cursor:"pointer"}}>
                  <div style={{fontSize:12.5,fontWeight:600,color:T.text,marginBottom:5,lineHeight:1.3,fontFamily:f}}>{item.n}</div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span style={{fontSize:13,fontWeight:700,color:T.accent,fontFamily:fm}}>{item.v}</span>
                    <div style={{width:19,height:19,borderRadius:99,background:stage.col,display:"flex",alignItems:"center",justifyContent:"center",fontSize:8.5,fontWeight:700,color:"#fff"}}>{item.p}</div>
                  </div>
                </Card>
              ))}
              <div style={{padding:"6px",border:`1.5px dashed ${T.border}`,borderRadius:6,textAlign:"center",fontSize:11,color:T.muted,cursor:"pointer",fontFamily:f}}>+ Add</div>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
};

/* ── SCR-SET-02: User Management ─────────────────────────────────────────── */
const UserMgmt=()=>(
  <Shell mod="settings" crumb="Settings › Users & Roles">
    <Head title="Users & Roles" sub="142 users · 8 roles defined"
      action={<Btn sm>+ Invite User</Btn>}/>
    <Card>
      <div style={{display:"flex",borderBottom:`1px solid ${T.border}`}}>
        {["Users","Roles","Invitations","Activity Log"].map((tab,i)=>(
          <div key={tab} style={{padding:"10px 16px",fontSize:13,fontWeight:i===0?600:400,color:i===0?T.accent:T.muted,borderBottom:i===0?`2px solid ${T.accent}`:"2px solid transparent",cursor:"pointer",fontFamily:f}}>{tab}</div>
        ))}
      </div>
      <div style={{padding:"9px 14px",background:T.surface,borderBottom:`1px solid ${T.border}`,display:"flex",gap:8,alignItems:"center"}}>
        <input readOnly placeholder="Search users…" style={{flex:1,fontSize:12.5,padding:"5px 10px",border:`1.5px solid ${T.border}`,borderRadius:6,fontFamily:f,background:"#fff",color:T.muted}}/>
        {["All roles","All status"].map(p=><select key={p} style={{fontSize:11.5,padding:"5px 9px",border:`1.5px solid ${T.border}`,borderRadius:6,fontFamily:f,color:T.muted}}><option>{p}</option></select>)}
      </div>
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <thead><tr>
          <th style={{fontFamily:f,fontSize:10.5,fontWeight:700,color:"#fff",background:T.brand,padding:"8px 11px",width:30}}><input type="checkbox" readOnly/></th>
          {["Name","Email","Roles","Status","MFA","Last Active",""].map(h=><TH key={h} c={h}/>)}
        </tr></thead>
        <tbody>
          {[["Alice Mbeki","alice@acmegroup.com","Org Admin, CFO","Active",true,"3 min ago"],
            ["Tom Patel","tom@acmegroup.com","VP Engineering","Active",true,"2 hr ago"],
            ["Sarah Chen","sarah@acmegroup.com","Legal Officer","Active",true,"Yesterday"],
            ["Dan Osei","dan@acmegroup.com","Read Only","Invited",false,"3 days ago"],
            ["Eve Wilson","eve@acmegroup.com","Finance Manager","Locked",true,"8 days ago"],
          ].map(([n,e,roles,stat,mfa,last])=>(
            <tr key={e} style={{background:"#fff",cursor:"pointer"}} onMouseEnter={ev=>ev.currentTarget.style.background=T.pale} onMouseLeave={ev=>ev.currentTarget.style.background="#fff"}>
              <td style={{padding:"7px 11px",borderBottom:`1px solid ${T.border}`}}><input type="checkbox" readOnly/></td>
              <TD c={n} bold/><TD c={e} muted small/>
              <td style={{padding:"7px 11px",borderBottom:`1px solid ${T.border}`}}><div style={{display:"flex",gap:4,flexWrap:"wrap"}}>{roles.split(", ").map(r=><Badge key={r} label={r} color="blue"/>)}</div></td>
              <TD c={<Badge label={stat} color={stat==="Active"?"green":stat==="Invited"?"amber":"red"}/>}/>
              <TD c={<span style={{fontSize:13}}>{mfa?"✅":"❌"}</span>}/>
              <TD c={last} muted small/><TD c={<span style={{color:T.muted}}>⋯</span>}/>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{padding:"8px 14px",fontSize:11.5,color:T.muted,borderTop:`1px solid ${T.border}`,display:"flex",justifyContent:"space-between"}}>
        <span>Showing 5 of 142 users</span><span style={{color:T.accent,cursor:"pointer"}}>◁  1  2  3 … 29  ▷</span>
      </div>
    </Card>
  </Shell>
);

/* ── SCR-SET-04: Audit Log ───────────────────────────────────────────────── */
const AuditLog=()=>(
  <Shell mod="settings" crumb="Settings › Audit Log">
    <Head title="Audit Log" sub="SHA-256 cryptographic chain · 18,423 records · Integrity verified"
      action={<div style={{display:"flex",gap:8}}><Btn v="secondary" sm>Verify Chain ✓</Btn><Btn v="secondary" sm>Export</Btn></div>}/>
    <div style={{padding:"9px 12px",background:T.success,borderRadius:8,border:`1px solid ${T.successTxt}30`,marginBottom:12,display:"flex",alignItems:"center",gap:8}}>
      <span>✅</span><span style={{fontSize:12.5,fontWeight:600,color:T.successTxt,fontFamily:f}}>Chain integrity verified · 18,423 records verified · Last check 07/03/2026 09:00 UTC</span>
    </div>
    <Card>
      <div style={{padding:"9px 14px",background:T.surface,borderBottom:`1px solid ${T.border}`,display:"flex",gap:8,borderRadius:"8px 8px 0 0"}}>
        <input readOnly placeholder="Filter audit events…" style={{flex:1,fontSize:12.5,padding:"5px 10px",border:`1.5px solid ${T.border}`,borderRadius:6,fontFamily:f,background:"#fff",color:T.muted}}/>
        {["All event types","All users","Date range"].map(p=><select key={p} style={{fontSize:11.5,padding:"5px 9px",border:`1.5px solid ${T.border}`,borderRadius:6,fontFamily:f,color:T.muted}}><option>{p}</option></select>)}
      </div>
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <thead><tr>{["Event ID","Timestamp (UTC)","Actor","Event Type","Resource","Outcome","Chain Hash"].map(h=><TH key={h} c={h}/>)}</tr></thead>
        <tbody>
          {[["AUD-18423","07/03/2026 11:34:22","alice@acme","finance.journal.created","JE-2026-0042","Success","3a7f…d942"],
            ["AUD-18422","07/03/2026 11:34:01","System","rbac.permission.check","finance.journal.create","Granted","9b2c…e781"],
            ["AUD-18421","07/03/2026 09:14:10","System","risk.kri.threshold_breach","Cash Runway KRI","Alert Sent","4d8a…c123"],
            ["AUD-18420","07/03/2026 09:00:00","System","kernel.audit.chain_verify","All Records","Verified","7e9f…b456"],
            ["AUD-18419","06/03/2026 17:42:15","tom@acme","hr.employee.profile.view","EMP-141","Success","2c5d…a789"],
          ].map(([id,ts,actor,evt,res,out,hash])=>(
            <tr key={id} style={{background:"#fff",cursor:"pointer"}} onMouseEnter={e=>e.currentTarget.style.background=T.pale} onMouseLeave={e=>e.currentTarget.style.background="#fff"}>
              <TD c={<span style={{color:T.accent,fontWeight:700,fontFamily:fm}}>{id}</span>}/>
              <TD c={ts} mono small/><TD c={actor} muted small/>
              <TD c={<span style={{fontSize:11.5,fontFamily:fm,color:T.text}}>{evt}</span>}/>
              <TD c={res} mono/><TD c={<Badge label={out} color={out==="Success"||out==="Granted"||out==="Verified"||out==="Alert Sent"?"green":"red"}/>}/>
              <TD c={<span style={{fontSize:10.5,fontFamily:fm,color:T.muted}}>{hash}</span>}/>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{padding:"8px 14px",fontSize:11.5,color:T.muted,borderTop:`1px solid ${T.border}`,display:"flex",justifyContent:"space-between"}}>
        <span>18,423 total audit records</span><span style={{color:T.accent,cursor:"pointer"}}>◁  1  2  3 … 3685  ▷</span>
      </div>
    </Card>
  </Shell>
);

/* ═══════════════════════════════════════════════════════════════════════════ */
/* FLOW DATA                                                                    */
/* ═══════════════════════════════════════════════════════════════════════════ */
const FLOWS = [
  {id:"auth",icon:"🔐",label:"Authentication Flow",color:"#334155",
    screens:[
      {id:"login",label:"Login",comp:<Login/>},
      {id:"mfa",label:"MFA Verification",comp:<MFA/>},
      {id:"setup",label:"Org Setup Wizard",comp:<OrgSetup/>},
    ]},
  {id:"dash",icon:"⬡",label:"Executive Dashboard",color:T.accent,
    screens:[{id:"exec",label:"Executive Dashboard",comp:<Dashboard/>}]},
  {id:"finance",icon:"◈",label:"Finance Flow",color:T.mid,
    screens:[
      {id:"jlist",label:"Journal Entry List",comp:<JournalList/>},
      {id:"jcreate",label:"Journal Entry — Create",comp:<JournalCreate/>},
      {id:"pl",label:"P&L Report",comp:<PLReport/>},
    ]},
  {id:"chombo",icon:"⚖",label:"Legal / Chombo Flow",color:"#1A5C28",
    screens:[
      {id:"elist",label:"Entity Registry",comp:<EntityRegistry/>},
      {id:"filing",label:"Filing Calendar",comp:<FilingCalendar/>},
    ]},
  {id:"hr",icon:"◉",label:"HR Flow",color:"#7A3200",
    screens:[
      {id:"empdir",label:"Employee Directory",comp:<EmployeeDir/>},
      {id:"newhire",label:"New Hire Wizard",comp:<NewHire/>},
      {id:"leave",label:"Leave Management",comp:<LeaveManagement/>},
    ]},
  {id:"risk",icon:"◬",label:"Risk Flow",color:T.errorTxt,
    screens:[
      {id:"kri",label:"KRI Dashboard",comp:<KRIDash/>},
      {id:"register",label:"Risk Register",comp:<RiskRegister/>},
    ]},
  {id:"work",icon:"▣",label:"Work / Sprint Flow",color:T.warnTxt,
    screens:[{id:"board",label:"Sprint Board",comp:<SprintBoard/>}]},
  {id:"grc",icon:"⊟",label:"GRC Flow",color:"#4A1A7A",
    screens:[{id:"obligs",label:"Obligation Register",comp:<ObligationRegister/>}]},
  {id:"sales",icon:"◷",label:"Sales Pipeline",color:"#1A5C28",
    screens:[{id:"pipeline",label:"Pipeline — Kanban",comp:<SalesPipeline/>}]},
  {id:"settings",icon:"⚙",label:"Settings Flow",color:T.navy2,
    screens:[
      {id:"users",label:"User Management",comp:<UserMgmt/>},
      {id:"audit",label:"Audit Log",comp:<AuditLog/>},
    ]},
];

/* ═══════════════════════════════════════════════════════════════════════════ */
/* MAIN APP                                                                     */
/* ═══════════════════════════════════════════════════════════════════════════ */
export default function App() {
  const [flowIdx, setFlowIdx] = useState(0);
  const [scrIdx, setScrIdx] = useState(0);
  const [key, setKey] = useState(0);

  const flow = FLOWS[flowIdx];
  const screen = flow.screens[scrIdx];
  const totalScreens = FLOWS.reduce((a,f2)=>a+f2.screens.length,0);

  const go = (fi, si) => {
    setFlowIdx(fi); setScrIdx(si); setKey(k=>k+1);
  };

  const prev = () => {
    if(scrIdx>0) go(flowIdx,scrIdx-1);
    else if(flowIdx>0) { const pf=FLOWS[flowIdx-1]; go(flowIdx-1,pf.screens.length-1); }
  };
  const next = () => {
    if(scrIdx<flow.screens.length-1) go(flowIdx,scrIdx+1);
    else if(flowIdx<FLOWS.length-1) go(flowIdx+1,0);
  };

  const globalIdx = FLOWS.slice(0,flowIdx).reduce((a,f2)=>a+f2.screens.length,0)+scrIdx+1;

  return (
    <div style={{height:"100vh",display:"flex",flexDirection:"column",fontFamily:f,background:"#060F1E",overflow:"hidden"}}>
      <GF/>
      {/* Top chrome */}
      <div style={{height:44,background:T.brand,display:"flex",alignItems:"center",padding:"0 16px",gap:10,flexShrink:0,borderBottom:"1px solid rgba(255,255,255,0.1)"}}>
        <div style={{fontSize:16,fontWeight:800,color:"#fff",letterSpacing:"-0.5px",marginRight:6}}>UME</div>
        <div style={{width:1,height:20,background:"rgba(255,255,255,0.2)"}}/>
        <span style={{fontSize:11.5,color:"rgba(255,255,255,0.6)",fontWeight:500}}>High-Fidelity Screen Flows</span>
        <span style={{fontSize:11,color:"rgba(255,255,255,0.35)",marginLeft:4}}>· {totalScreens} screens · 10 user flows</span>
        <div style={{flex:1}}/>
        <span style={{fontSize:11,color:"rgba(255,255,255,0.5)",fontFamily:fm}}>Screen {globalIdx} / {totalScreens}</span>
        <button onClick={prev} disabled={flowIdx===0&&scrIdx===0} style={{background:"rgba(255,255,255,0.1)",border:"none",borderRadius:5,padding:"4px 10px",color:"#fff",cursor:"pointer",fontSize:13,fontWeight:600,opacity:flowIdx===0&&scrIdx===0?0.3:1}}>←</button>
        <button onClick={next} disabled={flowIdx===FLOWS.length-1&&scrIdx===flow.screens.length-1} style={{background:T.accent,border:"none",borderRadius:5,padding:"4px 10px",color:"#fff",cursor:"pointer",fontSize:13,fontWeight:600,opacity:flowIdx===FLOWS.length-1&&scrIdx===flow.screens.length-1?0.3:1}}>→</button>
      </div>
      {/* Main layout */}
      <div style={{flex:1,display:"flex",overflow:"hidden"}}>
        {/* Flow navigator */}
        <div style={{width:200,background:"#0D1E33",borderRight:"1px solid rgba(255,255,255,0.07)",overflowY:"auto",flexShrink:0}}>
          <div style={{padding:"10px 12px 6px",fontSize:9.5,fontWeight:700,color:"rgba(255,255,255,0.3)",textTransform:"uppercase",letterSpacing:"0.1em"}}>User Flows</div>
          {FLOWS.map((fl,fi)=>(
            <div key={fl.id}>
              <div onClick={()=>go(fi,0)} style={{padding:"7px 12px",cursor:"pointer",background:fi===flowIdx?"rgba(255,255,255,0.07)":"transparent",display:"flex",alignItems:"center",gap:7,borderLeft:fi===flowIdx?`2px solid ${fl.color}`:"2px solid transparent"}}>
                <span style={{fontSize:13,color:fi===flowIdx?"#fff":"rgba(255,255,255,0.45)"}}>{fl.icon}</span>
                <span style={{fontSize:11.5,fontWeight:fi===flowIdx?600:400,color:fi===flowIdx?"#fff":"rgba(255,255,255,0.45)",lineHeight:1.3}}>{fl.label}</span>
              </div>
              {fi===flowIdx&&fl.screens.map((sc,si)=>(
                <div key={sc.id} onClick={()=>go(fi,si)} style={{padding:"5px 12px 5px 30px",cursor:"pointer",background:si===scrIdx?"rgba(255,255,255,0.1)":"transparent",display:"flex",alignItems:"center",gap:6,borderLeft:`2px solid ${si===scrIdx?fl.color:"transparent"}`}}>
                  <span style={{width:5,height:5,borderRadius:99,background:si===scrIdx?fl.color:"rgba(255,255,255,0.2)",flexShrink:0}}/>
                  <span style={{fontSize:11,fontWeight:si===scrIdx?600:400,color:si===scrIdx?"#fff":"rgba(255,255,255,0.4)",lineHeight:1.3}}>{sc.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Screen area */}
        <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
          {/* Screen label bar */}
          <div style={{height:34,background:"#0A1628",borderBottom:"1px solid rgba(255,255,255,0.06)",display:"flex",alignItems:"center",padding:"0 16px",gap:10,flexShrink:0}}>
            <span style={{width:8,height:8,borderRadius:99,background:flow.color,flexShrink:0}}/>
            <span style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:"0.07em"}}>{flow.label}</span>
            <span style={{fontSize:11,color:"rgba(255,255,255,0.2)"}}>›</span>
            <span style={{fontSize:12,fontWeight:600,color:"rgba(255,255,255,0.8)"}}>{screen.label}</span>
            <div style={{flex:1}}/>
            {flow.screens.length>1&&<div style={{display:"flex",gap:5}}>
              {flow.screens.map((sc,si)=>(
                <div key={sc.id} onClick={()=>go(flowIdx,si)} style={{width:si===scrIdx?20:8,height:8,borderRadius:99,background:si===scrIdx?flow.color:"rgba(255,255,255,0.2)",cursor:"pointer",transition:"all 0.2s"}}/>
              ))}
            </div>}
          </div>
          {/* The screen itself */}
          <div style={{flex:1,overflow:"hidden",padding:8,background:"#060F1E"}}>
            <div key={key} style={{height:"100%",borderRadius:8,overflow:"hidden",boxShadow:"0 8px 40px rgba(0,0,0,0.5)"}} className="fade">
              {screen.comp}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
