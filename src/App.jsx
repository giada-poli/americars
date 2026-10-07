
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ChevronLeft, ChevronRight, Fuel, Gauge, Heart,
  MapPin, Menu, MessageCircle, Search, ShieldCheck, Sparkles,
  X, CalendarDays, Settings2, Mail, Phone, Check
} from "lucide-react";

const cars = [
  {
    id: 1,
    make: "Ford",
    model: "Mustang Fastback",
    year: 1967,
    price: 74900,
    status: "Disponibile",
    category: "Muscle Car",
    transmission: "Automatico",
    engine: "V8 4.7L",
    mileage: "61.200 km",
    color: "Candy Apple Red",
    origin: "California, USA",
    power: "225 CV",
    cover: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1800&q=85",
    photos: [
      "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85"
    ],
    description: "Una delle icone più riconoscibili dell'automobilismo americano. Linea fastback, presenza scenica e il suono inconfondibile del V8. Esemplare selezionato per fascino, autenticità e qualità complessiva.",
    features: ["Interni in pelle nera", "Cerchi American Racing", "Servosterzo", "Impianto frenante revisionato"]
  },
  {
    id: 2,
    make: "Chevrolet",
    model: "Corvette Stingray",
    year: 1969,
    price: 89900,
    status: "In arrivo",
    category: "Sports Car",
    transmission: "Manuale",
    engine: "V8 5.7L",
    mileage: "47.800 km",
    color: "Tuxedo Black",
    origin: "Florida, USA",
    power: "300 CV",
    cover: "https://images.unsplash.com/photo-1567284575269-d4be568f1072?auto=format&fit=crop&w=1800&q=85",
    photos: [
      "https://images.unsplash.com/photo-1567284575269-d4be568f1072?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1800&q=85"
    ],
    description: "Profilo scolpito, cofano infinito e carattere autentico. La Stingray rappresenta la sportiva americana per eccellenza, qui in una configurazione nera elegante e aggressiva.",
    features: ["Cambio manuale", "T-top", "Interni coordinati", "Documentazione storica"]
  },
  {
    id: 3,
    make: "Cadillac",
    model: "DeVille Convertible",
    year: 1965,
    price: 68500,
    status: "Disponibile",
    category: "Convertible",
    transmission: "Automatico",
    engine: "V8 7.0L",
    mileage: "72.400 km",
    color: "Ivory Cream",
    origin: "Texas, USA",
    power: "340 CV",
    cover: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=1800&q=85",
    photos: [
      "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1800&q=85"
    ],
    description: "Lusso americano in formato panoramico. Una cabriolet imponente e raffinata, pensata per viaggiare con stile e trasformare ogni strada in una passerella.",
    features: ["Capote elettrica", "Panca anteriore", "Finiture cromate", "Radio in stile originale"]
  },
  {
    id: 4,
    make: "Chevrolet",
    model: "C10 Stepside",
    year: 1972,
    price: 54900,
    status: "Disponibile",
    category: "Pick-up",
    transmission: "Automatico",
    engine: "V8 5.7L",
    mileage: "83.100 km",
    color: "Desert Sand",
    origin: "Arizona, USA",
    power: "255 CV",
    cover: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1800&q=85",
    photos: [
      "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1469285994282-454ceb49e63c?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?auto=format&fit=crop&w=1800&q=85"
    ],
    description: "Un pick-up dal fascino ruvido, restaurato con gusto contemporaneo. Perfetto per chi cerca una classica americana capace di distinguersi senza rinunciare alla praticità.",
    features: ["Cassone in legno", "Assetto rivisto", "Aria condizionata", "Scarico sportivo"]
  },
  {
    id: 5,
    make: "Dodge",
    model: "Charger R/T",
    year: 1970,
    price: 119000,
    status: "Su richiesta",
    category: "Muscle Car",
    transmission: "Automatico",
    engine: "V8 7.2L",
    mileage: "56.700 km",
    color: "Pitch Black",
    origin: "Michigan, USA",
    power: "375 CV",
    cover: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1800&q=85",
    photos: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1800&q=85"
    ],
    description: "Una muscle car senza compromessi. Proporzioni leggendarie, motore generoso e presenza magnetica per un'auto che incarna tutta la potenza dell'epoca d'oro americana.",
    features: ["Allestimento R/T", "Strumentazione completa", "Cerchi Magnum", "Doppio scarico"]
  },
  {
    id: 6,
    make: "Ford",
    model: "F-100",
    year: 1956,
    price: 62500,
    status: "Venduta",
    category: "Pick-up",
    transmission: "Manuale",
    engine: "V8 4.5L",
    mileage: "90.300 km",
    color: "Signal Red",
    origin: "Nevada, USA",
    power: "173 CV",
    cover: "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&w=1800&q=85",
    photos: [
      "https://images.unsplash.com/photo-1537984822441-cff330075342?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1531761535209-180857e963b9?auto=format&fit=crop&w=1800&q=85",
      "https://images.unsplash.com/photo-1535732820275-9ffd998cac22?auto=format&fit=crop&w=1800&q=85"
    ],
    description: "Design anni Cinquanta e anima da lavoratore. Questo F-100 racconta l'America delle highway e delle piccole città, con un restauro capace di rispettarne il carattere.",
    features: ["Restauro completo", "Cassone restaurato", "Selleria bicolore", "Impianto elettrico revisionato"]
  }
];

const money = n => new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

function Logo({ light = false }) {
  return <button onClick={() => window.scrollTo({top:0, behavior:"smooth"})} className="group text-left">
    <div className={`text-[10px] tracking-[.4em] uppercase ${light ? "text-[#e6c895]" : "text-[#a23a2d]"}`}>American classics</div>
    <div className={`font-serif text-2xl leading-none tracking-tight ${light ? "text-white" : "text-[#171714]"}`}>AMERI<span className="italic text-[#a23a2d]">CARS</span></div>
  </button>
}

function Nav({ onInventory }) {
  const [open, setOpen] = useState(false);
  const go = id => { document.getElementById(id)?.scrollIntoView({behavior:"smooth"}); setOpen(false); };
  return <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#151512]/85 text-white backdrop-blur-xl">
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
      <Logo light />
      <nav className="hidden items-center gap-8 md:flex text-sm uppercase tracking-[.14em]">
        <button onClick={() => go("inventory")} className="hover:text-[#e6c895]">Auto</button>
        <button onClick={() => go("story")} className="hover:text-[#e6c895]">La nostra storia</button>
        <button onClick={() => go("services")} className="hover:text-[#e6c895]">Servizi</button>
        <button onClick={() => go("contact")} className="rounded-full bg-[#a23a2d] px-5 py-3 font-semibold hover:bg-[#bf4a3b]">Contatti</button>
      </nav>
      <button className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
    <AnimatePresence>{open && <motion.div initial={{height:0}} animate={{height:"auto"}} exit={{height:0}} className="overflow-hidden border-t border-white/10 bg-[#151512] md:hidden">
      <div className="flex flex-col p-5 text-left uppercase tracking-widest">
        {[['inventory','Auto'],['story','La nostra storia'],['services','Servizi'],['contact','Contatti']].map(([id,t]) => <button key={id} onClick={() => go(id)} className="border-b border-white/10 py-4 text-left">{t}</button>)}
      </div>
    </motion.div>}</AnimatePresence>
  </header>
}

function Hero() {
  return <section className="relative min-h-screen overflow-hidden bg-[#171714] text-white">
    <img className="absolute inset-0 h-full w-full object-cover opacity-60" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=90" alt="Strada americana al tramonto" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#171714] via-transparent to-black/20" />
    <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-20 lg:px-8">
      <motion.div initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.8}} className="max-w-4xl py-20">
        <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.3em] text-[#e6c895]"><span className="h-px w-10 bg-[#e6c895]"/>Vintage American Cars</div>
        <h1 className="font-serif text-6xl leading-[.91] tracking-tight sm:text-7xl lg:text-[7.5rem]">Guidare una<br/><span className="italic text-[#e6c895]">leggenda.</span></h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">Icone americane selezionate, controllate e accompagnate fino alla tua strada. Non vendiamo semplici auto. Custodiamo storie.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <button onClick={() => document.getElementById("inventory")?.scrollIntoView({behavior:"smooth"})} className="group flex items-center gap-3 rounded-full bg-[#a23a2d] px-7 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#bd4738]">Esplora la collezione <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/></button>
          <button onClick={() => document.getElementById("story")?.scrollIntoView({behavior:"smooth"})} className="rounded-full border border-white/35 px-7 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black">Scopri AmeriCars</button>
        </div>
      </motion.div>
    </div>
    <div className="absolute bottom-7 right-8 hidden text-right md:block"><div className="text-4xl font-serif italic text-[#e6c895]">66</div><div className="text-[10px] uppercase tracking-[.3em] text-white/60">The road starts here</div></div>
  </section>
}

function Card({ car, onOpen }) {
  const [liked,setLiked]=useState(false);
  return <motion.article layout initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="group overflow-hidden rounded-[1.6rem] bg-white shadow-sm ring-1 ring-black/5">
    <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
      <img src={car.cover} alt={`${car.make} ${car.model}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/>
      <div className="absolute left-4 top-4 rounded-full bg-[#f3e6cd]/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#171714]">{car.status}</div>
      <button onClick={() => setLiked(!liked)} className="absolute right-4 top-4 rounded-full bg-black/45 p-2.5 text-white backdrop-blur-md"><Heart className={`h-4 w-4 ${liked?'fill-[#b94132] text-[#b94132]':''}`}/></button>
    </div>
    <div className="p-6">
      <div className="text-[11px] font-bold uppercase tracking-[.2em] text-[#a23a2d]">{car.year} · {car.category}</div>
      <h3 className="mt-2 font-serif text-3xl leading-tight text-[#171714]">{car.make} <span className="italic">{car.model}</span></h3>
      <div className="mt-5 flex items-center gap-5 border-y border-black/10 py-4 text-xs text-neutral-600">
        <span className="flex items-center gap-2"><Fuel className="h-4 w-4"/>{car.engine}</span>
        <span className="flex items-center gap-2"><Gauge className="h-4 w-4"/>{car.mileage}</span>
      </div>
      <div className="mt-5 flex items-end justify-between gap-3">
        <div><div className="text-[10px] uppercase tracking-widest text-neutral-400">Prezzo</div><div className="font-serif text-2xl">{money(car.price)}</div></div>
        <button onClick={() => onOpen(car)} className="flex items-center gap-2 rounded-full bg-[#171714] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#a23a2d]">Dettagli <ArrowRight className="h-3.5 w-3.5"/></button>
      </div>
    </div>
  </motion.article>
}

function Inventory({ onOpen }) {
  const [search,setSearch]=useState("");
  const [category,setCategory]=useState("Tutte");
  const categories=["Tutte",...new Set(cars.map(c=>c.category))];
  const filtered=useMemo(()=>cars.filter(c => (category==="Tutte"||c.category===category) && `${c.make} ${c.model} ${c.year}`.toLowerCase().includes(search.toLowerCase())),[search,category]);
  return <section id="inventory" className="bg-[#f2eadc] px-5 py-24 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div><div className="text-xs font-bold uppercase tracking-[.28em] text-[#a23a2d]">La collezione</div><h2 className="mt-3 max-w-2xl font-serif text-5xl leading-none sm:text-6xl">Scegli la tua prossima <span className="italic">storia.</span></h2></div>
        <p className="max-w-md text-neutral-600">Ogni vettura viene selezionata per identità, qualità e fascino. Esplora i modelli disponibili e quelli in arrivo.</p>
      </div>
      <div className="my-10 flex flex-col gap-4 rounded-3xl bg-white/65 p-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1"><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Cerca marca, modello o anno" className="w-full rounded-full bg-white py-3.5 pl-11 pr-4 text-sm outline-none ring-[#a23a2d] focus:ring-2"/></div>
        <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">{categories.map(c=><button key={c} onClick={()=>setCategory(c)} className={`whitespace-nowrap rounded-full px-4 py-3 text-xs font-bold ${category===c?'bg-[#a23a2d] text-white':'bg-white text-neutral-600 hover:bg-neutral-100'}`}>{c}</button>)}</div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filtered.map(c=><Card key={c.id} car={c} onOpen={onOpen}/>)}</div>
      {!filtered.length && <div className="py-20 text-center text-neutral-500">Nessuna auto corrisponde alla ricerca.</div>}
    </div>
  </section>
}

function Story() {
  return <section id="story" className="overflow-hidden bg-[#171714] text-white">
    <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
      <div className="relative min-h-[500px]"><img src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1400&q=85" className="absolute inset-0 h-full w-full object-cover grayscale-[20%]" alt="Auto classica"/><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/><div className="absolute bottom-7 left-7 rounded-2xl border border-white/15 bg-black/35 p-5 backdrop-blur"><div className="font-serif text-4xl text-[#e6c895]">Route 66</div><div className="text-xs uppercase tracking-[.23em] text-white/60">Dall'America all'Italia</div></div></div>
      <div className="flex flex-col justify-center px-7 py-20 lg:p-20">
        <div className="text-xs font-bold uppercase tracking-[.28em] text-[#e6c895]">La nostra storia</div>
        <h2 className="mt-4 font-serif text-5xl leading-tight">La passione non si <span className="italic">inventa.</span></h2>
        <p className="mt-7 leading-relaxed text-white/65">AmeriCars nasce dall'amore per le automobili che hanno definito un'epoca. Cerchiamo vetture con carattere, ne ricostruiamo la storia e le accompagniamo verso chi saprà continuare a viverla.</p>
        <p className="mt-4 leading-relaxed text-white/65">Dalla prima selezione negli Stati Uniti alla consegna, curiamo ogni passaggio con attenzione, trasparenza e rispetto per l'originalità.</p>
        <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/15 pt-8">{[["01","Selezione"],["02","Controllo"],["03","Consegna"]].map(x=><div key={x[0]}><div className="font-serif text-3xl italic text-[#e6c895]">{x[0]}</div><div className="mt-1 text-[10px] uppercase tracking-widest text-white/60">{x[1]}</div></div>)}</div>
      </div>
    </div>
  </section>
}

function Services() {
 const items=[
   [ShieldCheck,"Selezione verificata","Vetture scelte con attenzione e documentazione consultabile."],
   [MapPin,"Importazione dedicata","Supporto dalla ricerca negli USA fino all'arrivo in Italia."],
   [Settings2,"Assistenza specialistica","Una rete di professionisti per controlli, cura e manutenzione."],
   [Sparkles,"Ricerca su richiesta","Cerchiamo il modello, l'anno e la configurazione che desideri."]
 ];
 return <section id="services" className="bg-[#f8f5ef] px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="text-center"><div className="text-xs font-bold uppercase tracking-[.28em] text-[#a23a2d]">Il metodo AmeriCars</div><h2 className="mt-4 font-serif text-5xl">Dal sogno alla <span className="italic">strada.</span></h2></div><div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{items.map(([Icon,title,text],i)=><motion.div key={title} whileHover={{y:-5}} className="rounded-3xl border border-black/10 bg-white p-7"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f2eadc] text-[#a23a2d]"><Icon/></div><h3 className="mt-8 font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-neutral-600">{text}</p></motion.div>)}</div></div></section>
}

function Contact() {
 const [sent,setSent]=useState(false);
 return <section id="contact" className="bg-[#a23a2d] px-5 py-24 text-white lg:px-8"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.85fr_1.15fr]">
   <div><div className="text-xs font-bold uppercase tracking-[.28em] text-[#f3d5a9]">Parliamo della tua prossima auto</div><h2 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">La strada ti sta <span className="italic">aspettando.</span></h2><p className="mt-6 max-w-md text-white/70">Chiedici informazioni su una vettura disponibile oppure raccontaci quale icona americana stai cercando.</p><div className="mt-10 space-y-4 text-sm"><div className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#f3d5a9]"/> +39 000 000 0000</div><div className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#f3d5a9]"/> info@americars.it</div><div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[#f3d5a9]"/> Italia, showroom su appuntamento</div></div></div>
   <form onSubmit={e=>{e.preventDefault();setSent(true)}} className="rounded-[2rem] bg-[#f8f5ef] p-6 text-[#171714] sm:p-9">
    {sent ? <div className="flex min-h-[380px] flex-col items-center justify-center text-center"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700"><Check/></div><h3 className="mt-5 font-serif text-3xl">Richiesta inviata</h3><p className="mt-2 text-neutral-500">Grazie. Ti ricontatteremo usando i recapiti indicati.</p><button type="button" onClick={()=>setSent(false)} className="mt-6 text-sm font-bold text-[#a23a2d]">Invia un'altra richiesta</button></div> : <><h3 className="font-serif text-3xl">Richiedi informazioni</h3><div className="mt-6 grid gap-4 sm:grid-cols-2"><input required placeholder="Nome e cognome" className="rounded-xl border border-black/10 bg-white p-4 outline-none focus:border-[#a23a2d]"/><input required type="email" placeholder="Email" className="rounded-xl border border-black/10 bg-white p-4 outline-none focus:border-[#a23a2d]"/><input placeholder="Telefono" className="rounded-xl border border-black/10 bg-white p-4 outline-none focus:border-[#a23a2d]"/><select className="rounded-xl border border-black/10 bg-white p-4 outline-none"><option>Auto di interesse</option>{cars.map(c=><option key={c.id}>{c.make} {c.model}</option>)}</select></div><textarea required rows={5} placeholder="Come possiamo aiutarti?" className="mt-4 w-full rounded-xl border border-black/10 bg-white p-4 outline-none focus:border-[#a23a2d]"/><label className="mt-4 flex items-start gap-3 text-xs text-neutral-500"><input required type="checkbox" className="mt-0.5"/> Acconsento al trattamento dei dati per essere ricontattato.</label><button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#171714] px-6 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-[#a23a2d]">Invia richiesta <ArrowRight className="h-4 w-4"/></button></>}
   </form>
 </div></section>
}

function Detail({car,onClose}) {
 const [photo,setPhoto]=useState(0);
 useEffect(()=>{document.body.style.overflow="hidden";return()=>{document.body.style.overflow=""}},[]);
 const next=()=>setPhoto((photo+1)%car.photos.length), prev=()=>setPhoto((photo-1+car.photos.length)%car.photos.length);
 return <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 overflow-y-auto bg-[#f8f5ef]">
   <div className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-black/10 bg-[#f8f5ef]/90 px-5 backdrop-blur-xl lg:px-8"><Logo/><button onClick={onClose} className="flex items-center gap-2 rounded-full border border-black/15 px-4 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white"><X className="h-4 w-4"/> Chiudi</button></div>
   <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
    <div className="relative overflow-hidden rounded-[2rem] bg-black"><img src={car.photos[photo]} alt={car.model} className="h-[45vh] w-full object-cover md:h-[65vh]"/><div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/><button onClick={prev} className="absolute left-4 top-1/2 rounded-full bg-white/80 p-3 backdrop-blur"><ChevronLeft/></button><button onClick={next} className="absolute right-4 top-1/2 rounded-full bg-white/80 p-3 backdrop-blur"><ChevronRight/></button><div className="absolute bottom-5 right-5 rounded-full bg-black/50 px-4 py-2 text-xs text-white backdrop-blur">{photo+1} / {car.photos.length}</div></div>
    <div className="mt-4 grid grid-cols-3 gap-3">{car.photos.map((p,i)=><button key={p} onClick={()=>setPhoto(i)} className={`overflow-hidden rounded-xl ${i===photo?'ring-3 ring-[#a23a2d]':'opacity-65 hover:opacity-100'}`}><img src={p} className="aspect-[16/8] w-full object-cover"/></button>)}</div>
    <div className="grid gap-12 py-14 lg:grid-cols-[1.2fr_.8fr]">
      <div><div className="text-xs font-bold uppercase tracking-[.25em] text-[#a23a2d]">{car.year} · {car.status}</div><h1 className="mt-3 font-serif text-5xl leading-tight sm:text-6xl">{car.make} <span className="italic">{car.model}</span></h1><p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-600">{car.description}</p><h3 className="mt-10 font-serif text-2xl">Punti di forza</h3><div className="mt-5 grid gap-3 sm:grid-cols-2">{car.features.map(f=><div key={f} className="flex items-center gap-3 rounded-xl bg-white p-4 text-sm"><Check className="h-4 w-4 text-[#a23a2d]"/>{f}</div>)}</div></div>
      <aside className="h-fit rounded-[1.6rem] bg-[#171714] p-7 text-white lg:sticky lg:top-28"><div className="text-xs uppercase tracking-widest text-white/45">Prezzo</div><div className="mt-1 font-serif text-4xl text-[#e6c895]">{money(car.price)}</div><div className="my-7 grid grid-cols-2 gap-x-5 gap-y-6 border-y border-white/15 py-6 text-sm">{[["Motore",car.engine],["Potenza",car.power],["Cambio",car.transmission],["Chilometri",car.mileage],["Colore",car.color],["Origine",car.origin]].map(([k,v])=><div key={k}><div className="text-[9px] uppercase tracking-widest text-white/40">{k}</div><div className="mt-1">{v}</div></div>)}</div><button onClick={()=>{onClose();setTimeout(()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"}),100)}} className="flex w-full items-center justify-center gap-2 rounded-full bg-[#a23a2d] px-5 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#bd4738]"><MessageCircle className="h-4 w-4"/> Richiedi informazioni</button><p className="mt-4 text-center text-[10px] leading-relaxed text-white/40">Dati e disponibilità da confermare con un consulente AmeriCars.</p></aside>
    </div>
   </div>
 </motion.div>
}

function Footer(){return <footer className="bg-[#10100e] px-5 py-12 text-white lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><Logo light/><p className="mt-4 max-w-sm text-sm text-white/45">Icone americane. Emozioni senza tempo.</p></div><div className="flex gap-3"><button className="rounded-full border border-white/15 p-3 hover:bg-white hover:text-black"></button><button className="rounded-full border border-white/15 p-3 hover:bg-white hover:text-black"><MessageCircle className="h-4 w-4"/></button></div></div><div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-widest text-white/35 sm:flex-row"><span>© 2026 AmeriCars</span><span>Privacy · Cookie · Note legali</span></div></footer>}

export default function App(){
 const [selected,setSelected]=useState(null);
 return <div className="min-h-screen bg-[#f8f5ef] font-sans text-[#171714] selection:bg-[#a23a2d] selection:text-white">
   <Nav/><Hero/><Inventory onOpen={setSelected}/><Story/><Services/><Contact/><Footer/>
   <a href="https://wa.me/390000000000" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#1fa855] text-white shadow-xl transition hover:scale-105"><MessageCircle/></a>
   <AnimatePresence>{selected&&<Detail car={selected} onClose={()=>setSelected(null)}/>}</AnimatePresence>
 </div>
}
