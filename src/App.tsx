/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scale, 
  BookOpen, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight,
  Menu,
  X,
  ShieldCheck,
  Briefcase,
  Globe
} from 'lucide-react';


const SERVICES = [
  {
    title: 'Huurrecht',
    description: 'Adviseren en juridische procedures over het huurrecht in de breedste zin des woords, winkelruimte, bedrijfsruimte en woonruimte.',
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    title: 'Vastgoedrecht',
    description: 'Advies en procesvoering binnen het vastgoedrecht, alsmede het doen van due diligence onderzoek en het onderhandelen over de aan- en verkoop van vastgoed.',
    icon: <MapPin className="w-6 h-6" />
  },
  {
    title: 'Procesrecht',
    description: 'Doortastende vertegenwoordiging in rechte bij civiele procedures en complexe huur-, bouw- en vastgoedgeschillen.',
    icon: <Scale className="w-6 h-6" />
  },
  {
    title: 'Contractenrecht',
    description: 'Het opstellen en beoordelen van koop-, huur-, aannemings- en samenwerkingsovereenkomsten.',
    icon: <BookOpen className="w-6 h-6" />
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'team'>('home');
  const [imgSrc, setImgSrc] = useState("/images/janneke_pasfoto2.jpg");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; content: string } | null>(null);
  const [imgError, setImgError] = useState(false);

  const handleImgError = () => {
    setImgError(true);
  };

  const navigateToSection = (href: string) => {
    if (href.startsWith('#')) {
      const id = href.substring(1);
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 120);
      } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#expertise' },
    { name: 'Over', href: '#over' },
    { name: 'Aanpak', href: '#aanpak' },
    { name: 'Contact', href: '#contact' },
  ];

  const legalDocs = {
    privacy: {
      title: "Privacyverklaring",
      content: `Berendsen Advocatuur B.V. (hierna: Berendsen Advocatuur) respecteert uw privacy en verwerkt persoonsgegevens in overeenstemming met de geldende wet- en regelgeving, waaronder de Algemene Verordening Gegevensbescherming (AVG). In deze privacyverklaring wordt uitgelegd welke persoonsgegevens worden verwerkt, met welk doel en op welke grondslag.\n\n1. Doeleinden van verwerking\nBerendsen Advocatuur verwerkt persoonsgegevens uitsluitend voor de volgende doeleinden:\n- Het opstellen van (juridische) documenten, waaronder maar niet beperkt tot overeenkomsten.\n- Het verlenen van juridisch advies, het uitvoeren van due diligence onderzoeken of andere juridische dienstverlening.\n- Het voldoen aan wettelijke verplichtingen.\n- Marketingdoeleinden en business development, waaronder het versturen van nieuwsbrieven of uitnodigingen voor evenementen.\n- Het behandelen van sollicitaties.\n- Andere doeleinden waarvoor de betrokkene uitdrukkelijk toestemming heeft gegeven.\n\n2. Gebruik van gegevens\nPersoonsgegevens worden niet gebruikt voor andere dan bovengenoemde doeleinden, tenzij de betrokkene daarvoor expliciet toestemming heeft gegeven.\n\n3. Grondslag voor verwerking\nDe verwerking van persoonsgegevens door Berendsen Advocatuur vindt plaats op basis van een of meer van de volgende grondslagen:\n- De uitvoering van een overeenkomst.\n- Het voldoen aan wettelijke verplichtingen.\n- Gerechtvaardigde belangen van Berendsen Advocatuur of derden.\n- Toestemming van de betrokkene (indien van toepassing).\n\n4. Herkomst van persoonsgegevens\nNaast persoonsgegevens die rechtstreeks van de betrokkene worden verkregen, kan Berendsen Advocatuur gegevens verzamelen via onder meer:\n- Openbare registers (zoals het Handelsregister van de Kamer van Koophandel, het Kadaster).\n- Andere adviseurs, zoals advocaten, belastingadviseurs of notarissen die betrokken zijn bij de werkzaamheden.\n- Openbare bronnen zoals sociale media of zakelijke websites.\n\n5. Verstrekking aan derden\nBerendsen Advocatuur verstrekt persoonsgegevens uitsluitend aan derden indien dit noodzakelijk is voor de uitvoering van de werkzaamheden, op verzoek van de betrokkene of wanneer dit wettelijk verplicht is. Voorbeelden hiervan zijn:\n- Registraties in openbare registers indien wettelijk vereist.\n- Andere partijen of adviseurs die betrokken zijn bij een juridische procedure of overeenkomst.\n- Banken indien noodzakelijk voor betalingsverkeer.\n- IT-dienstverleners die persoonsgegevens verwerken namens Berendsen Advocatuur (met verwerkersovereenkomst).\n\n6. Bewaartermijnen\nPersoonsgegevens worden niet langer bewaard dan noodzakelijk is voor het doel waarvoor zij zijn verzameld, of voor zover wettelijk vereist. Uitgangspunten hierbij zijn:\n- Dossiers: tot 7 jaar na afronding van de zaak.\n- Administratieve en fiscale gegevens: minimaal 7 jaar (belastingwetgeving).\n- Sollicitatiegegevens: maximaal 4 weken na beëindiging van de procedure (tenzij toestemming voor langer bewaren).\n\n7. Uw rechten\nAls betrokkene heeft u de volgende rechten op grond van de AVG:\n- Inzage in uw persoonsgegevens.\n- Correctie of verwijdering van uw gegevens.\n- Beperking van de verwerking.\n- Bezwaar maken tegen verwerking.\n- Overdraagbaarheid van uw gegevens (dataportabiliteit).\n\nEen verzoek hiertoe kunt u indienen via de contactgegevens onderaan deze verklaring. Berendsen Advocatuur kan vragen zich te identificeren voordat een verzoek in behandeling wordt genomen.\n\n8. Uitzonderingen op rechten\nIn bepaalde gevallen kan het voorkomen dat Berendsen Advocatuur uw verzoek niet (volledig) kan honoreren, bijvoorbeeld wanneer wettelijke verplichtingen (zoals geheimhoudings- of bewaarplichten) in de weg staan. U wordt hiervan schriftelijk op de hoogte gesteld.\n\n9. Klachten en contact\nBij vragen of klachten over de verwerking van persoonsgegevens kunt u contact opnemen met:\nmr. J.M. Berendsen\n✉ E-mail: janneke@berendsenadvocatuur.nl\n📞 Telefoonnummer: +31 (0)6 52 31 35 07\n\nℹ Heeft u een klacht die niet naar tevredenheid wordt afgehandeld? Dan kunt u zich wenden tot de Autoriteit Persoonsgegevens (www.autoriteitpersoonsgegevens.nl).`
    },
    terms: {
      title: "Algemene Voorwaarden",
      content: `ALGEMENE VOORWAARDEN BERENDSEN ADVOCATUUR B.V.\n\nArtikel 1 Definities en toepasselijkheid\nBerendsen Advocatuur B.V. is een besloten vennootschap met beperkte aansprakelijkheid naar Nederlands recht, gevestigd te Amsterdam en ingeschreven in het Handelsregister van de Kamer van Koophandel onder nummer 99947269 (hierna: â€œBerendsen Advocatuurâ€). Berendsen Advocatuur verleent haar diensten uitsluitend onder toepasselijkheid van deze algemene voorwaarden. Deze algemene voorwaarden zijn van toepassing op iedere opdracht, inclusief iedere vervolgopdracht, gewijzigde of aanvullende opdracht, alsmede op alle rechtsbetrekkingen die daaruit voortvloeien of daarmee verband houden.\nDeze algemene voorwaarden gelden mede ten behoeve van alle (rechts)personen die bij de uitvoering van de opdracht door Berendsen Advocatuur worden ingeschakeld, alsmede for alle personen for wier handelen of nalaten Berendsen Advocatuur aansprakelijk zou kunnen zijn.\n\nArtikel 2 Opdracht\nDe opdracht tussen Berendsen Advocatuur en de opdrachtgever is een overeenkomst van opdracht in de zin van artikel 7:400 BW. Alle opdrachten worden uitsluitend aanvaard en uitgevoerd door Berendsen Advocatuur, ook indien het de bedoeling is dat een opdracht door een bepaalde persoon wordt uitgevoerd. Opdrachten verstrekt aan bij Berendsen Advocatuur werkzame personen worden geacht uitsluitend aan Berendsen Advocatuur te zijn verstrekt.\nBerendsen Advocatuur verbindt zich tot een inspanningsverplichting en niet tot een resultaatsverplichting. Tenzij schriftelijk anders overeengekomen, wordt uitsluitend geadviseerd naar Nederlands recht. De artikelen 7:404, 7:407 lid 2 en 7:409 BW zijn uitgesloten.\n\nArtikel 3 Aansprakelijkheid\nIedere aansprakelijkheid van Berendsen Advocatuur is beperkt tot het bedrag dat in het desbetreffende geval wordt uitgekeerd onder de door Berendsen Advocatuur afgesloten beroepsaansprakelijkheidsverzekering, vermeerderd met het toepasselijke eigen risico.\nIedere vordering tot schadevergoeding vervalt indien deze niet binnen Ã©Ã©n jaar nadat de opdrachtgever bekend is geworden of redelijkerwijs bekend had kunnen zijn met de schade en de aansprakelijke partij, bij de bevoegde rechter aanhangig is gemaakt.\nBerendsen Advocatuur is niet aansprakelijk for indirecte schade, waaronder begrepen maar niet beperkt tot gevolgschade, gederfde winst, gemiste besparingen en stagnatieschade.\n\nArtikel 4 Inschakeling van derden\nBerendsen Advocatuur is bevoegd bij de uitvoering van opdrachten derden in te schakelen. Waar redelijk zal hierover vooraf overleg plaatsvinden met de opdrachtgever. Berendsen Advocatuur is gemachtigd om namens de opdrachtgever eventuele aansprakelijkheidsbeperkingen en andere voorwaarden van derden te aanvaarden. Berendsen Advocatuur is niet aansprakelijk for fouten of tekortkomingen van derden in de uitvoering van hun werkzaamheden.\n\nArtikel 5 Derdengelden\nBerendsen Advocatuur beschikt niet over een derdengeldenrekening en aanvaardt geen gelden ten behoeve van clienten of derden. Betalingen in het kader van opdrachten dienen rechtstreeks tussen betrokken partijen te worden verricht, tenzij schriftelijk anders overeengekomen.\n\nArtikel 6 Honorarium, kosten en declaratie\nBerendsen Advocatuur brengt for haar dienstverlening een honorarium in rekening op basis van het aantal gewerkte uren vermenigvuldigd met de geldende uurtarieven, tenzij schriftelijk anders overeengekomen. Uurtarieven kunnen periodiek worden aangepast. Daarnaast worden alle externe kosten als verschotten aan de opdrachtgever doorbelast. Indien van toepassing wordt omzetbelasting (BTW) in rekening gebracht.\nBerendsen Advocatuur is gerechtigd een voorschot te verlangen, welk voorschot wordt verrekend met de einddeclaratie. Werkzaamheden kunnen worden opgeschort indien geen (voldoende) voorschot is voldaan. Declaraties worden in beginsel maandelijks verzonden en dienen binnen 14 dagen na factuurdatum te worden voldaan. Bij niet-tijdige betaling is de opdrachtgever van rechtswege in verzuim en is wettelijke (handels)rente verschuldigd, alsmede alle redelijke kosten van incasso. Indien niet binnen 14 dagen schriftelijk wordt gereclameerd tegen een declaratie, wordt deze geacht te zijn geaccepteerd.\n\nArtikel 7 Vrijwaring\nDe opdrachtgever vrijwaart Berendsen Advocatuur tegen alle aanspraken van derden, inclusief de kosten van rechtsbijstand, die op enigerlei wijze samenhangen met de uitvoering van de opdracht, tenzij deze aanspraken het gevolg zijn van opzet of bewuste roekeloosheid aan de zijde van Berendsen Advocatuur.\n\nArtikel 8 Gebruik van technologie en AI\nBerendsen Advocatuur kan bij de uitvoering van haar werkzaamheden gebruikmaken van (geautomatiseerde) technologieÃ«n, waaronder toepassingen gebaseerd op kunstmatige intelligentie (AI). Deze technologieÃ«n worden uitsluitend gebruikt ter ondersteuning van de dienstverlening. De opdrachtgever stemt in met het gebruik van dergelijke technologie, tenzij schriftelijk anders overeengekomen.\n\nArtikel 9 Geheimhouding en communicatie\nBerendsen Advocatuur zal vertrouwelijke informatie vertrouwelijk behandelen met inachtneming van toepasselijke wet- en regelgeving en beroepsregels. Berendsen Advocatuur is gerechtigd te communiceren via elektronische communicatiemiddelen, waaronder e-mail en andere digitale kanalen.\n\nArtikel 10 Compliance (Wwft en AVG)\nBerendsen Advocatuur is op grond van wet- en regelgeving, waaronder de Wet ter voorkoming van witwassen en financieren van terrorisme (Wwft), verplicht de identiteit van opdrachtgevers vast te stellen en ongebruikelijke transacties te melden aan de bevoegde autoriteiten. Persoonsgegevens worden verwerkt in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).\n\nArtikel 11 Klachtenregeling\nOp de dienstverlening van Berendsen Advocatuur is een interne klachtenregeling van toepassing. Klachten worden behandeld conform deze regeling.\n\nArtikel 12 Toepasselijk recht en bevoegde rechter\nOp alle rechtsverhoudingen tussen Berendsen Advocatuur en de opdrachtgever is uitsluitend Nederlands recht van toepassing. Geschillen worden bij uitsluiting voorgelegd aan de bevoegde rechter in het arrondissement waar Berendsen Advocatuur is gevestigd.`
    },
    complaints: {
      title: "Kantoorklachtenregeling",
      content: `Artikel 1 “ Begripsbepalingen\nIn deze kantoorklachtenregeling wordt verstaan onder:\nâ€¢ klacht: iedere schriftelijke uiting van onvrede van of namens een client over de dienstverlening van de advocaat of een medewerker onder diens verantwoordelijkheid, betrekking hebbend op de totstandkoming of uitvoering van de overeenkomst van opdracht, de kwaliteit van de verleende juridische diensten of de hoogte van de facturatie, niet zijnde een klacht in de zin van paragraaf 4 van de Advocatenwet;\nâ€¢ klager: de client of diens vertegenwoordiger die een klacht indient;\nâ€¢ klachtenfunctionaris: de bij Berendsen Advocatuur aangewezen advocaat die belast is met de behandeling van klachten volgens deze regeling.\n\nArtikel 2 Toepasselijkheid\nDeze klachtenregeling is van toepassing op iedere overeenkomst van opdracht tussen Berendsen Advocatuur en haar clienten.\nAlle bij Berendsen Advocatuur werkzame advocaten dragen zorg voor het behandelen van klachten overeenkomstig deze regeling.\n\nArtikel 3 Doelstellingen\nDeze regeling heeft tot doel:\nâ€¢ het bieden van een laagdrempelige procedure voor het zorgvuldig en snel behandelen van klachten;\nâ€¢ het waarborgen van een zorgvuldige omgang met signalen van ontevredenheid;\nâ€¢ het verbeteren van de kwaliteit van de dienstverlening door het analyseren van klachten;\nâ€¢ het behouden en versterken van de relatie met de cliet;\n het trainen van medewerkers in het professioneel en clientgericht omgaan met klachten.\n\nArtikel 4 Informatie bij aanvang van de dienstverlening\nDeze klachtenregeling is gepubliceerd op de website van Berendsen Advocatuur. De advocaat wijst de client bij aanvang van de dienstverlening op het bestaan en de toepasselijkheid van deze regeling.\nIn de algemene voorwaarden is opgenomen dat klachten die na interne afhandeling niet zijn opgelost, kunnen worden voorgelegd aan de bevoegde rechter.\n\nArtikel 5 Interne klachtprocedure\nIndien een client zich met een klacht tot het kantoor wendt, wordt deze klacht doorgeleid naar J.M. Berendsen, die als klachtenfunctionaris optreedt.\nDe klachtenfunctionaris informeert de betrokken advocaat over de klacht en stelt zowel de klager als de betrokken advocaat in de gelegenheid om een toelichting te geven.\nDe betrokken advocaat probeert in overleg met de cliÃ«nt tot een oplossing te komen, al dan niet met tussenkomst van de klachtenfunctionaris.\nDe klachtenfunctionaris handelt de klacht in beginsel binnen vier weken na ontvangst af. Indien meer tijd nodig is, wordt de klager daarvan tijdig in kennis gesteld, onder vermelding van de aangepaste termijn.\nDe klachtenfunctionaris brengt de klager en de betrokken advocaat schriftelijk op de hoogte van zijn oordeel over de (on)gegrondheid van de klacht, eventueel met aanbevelingen.\nIndien de klacht naar tevredenheid is opgelost, tekenen de klager, de betrokken advocaat en de klachtenfunctionaris het oordeel ter bevestiging van de afdoening.\n\nArtikel 6 Vertrouwelijkheid en kosteloosheid\nDe klachtenfunctionaris en de betrokken advocaat behandelen de klacht onder strikte geheimhouding.\nVoor de behandeling van de klacht worden geen kosten in rekening gebracht bij de klager.\n\nArtikel 7 “ Taken en verantwoordelijkheden\nDe klachtenfunctionaris bewaakt de voortgang en de tijdige afhandeling van de klacht.\nDe betrokken advocaat houdt de klachtenfunctionaris op de hoogte van relevante ontwikkelingen en pogingen tot oplossing.\nDe klachtenfunctionaris houdt de klager op de hoogte van de voortgang. De klachtenfunctionaris onderhoudt het klachtdossier.\n\nArtikel 8 Registratie en evaluatie\nIedere klacht wordt met bijbehorende gegevens vastgelegd door de klachtenfunctionaris.\nIndien een klacht meerdere onderwerpen omvat, wordt dit afzonderlijk geregistreerd.\nDe klachtenfunctionaris rapporteert periodiek over de aard en afhandeling van klachten en doet aanbevelingen ter verbetering van de dienstverlening.\nDe klachten worden minimaal eenmaal per jaar intern geÃ«valueerd met als doel procesverbetering en kwaliteitsverhoging.`
    },
    usage: {
      title: "Gebruiksvoorwaarden website",
      content: `GEBRUIKSVOORWAARDEN WEBSITE\n\nWebsite-informatie\nDe website van Berendsen Advocatuur B.V. bevat algemene informatie over juridische onderwerpen en over de dienstverlening van het kantoor. Deze informatie is uitsluitend bedoeld ter algemene informatieverstrekking en kan niet worden aangemerkt als juridisch advies in een concrete situatie.\nHoewel Berendsen Advocatuur de inhoud van de website met zorg samenstelt en onderhoudt, kan niet worden gegarandeerd dat alle informatie te allen tijde volledig, juist of actueel is. Berendsen Advocatuur aanvaardt geen aansprakelijkheid for het gebruik van de informatie op de website of for eventuele gevolgen daarvan.\n\nIntellectuele eigendom\nAlle intellectuele eigendomsrechten met betrekking tot de inhoud van deze website, waaronder begrepen teksten, afbeeldingen, vormgeving en overige materialen, berusten bij Berendsen Advocatuur of haar licentiegevers.\nZonder voorafgaande schriftelijke toestemming van Berendsen Advocatuur is het niet toegestaan (delen van) de website of de daarop geplaatste informatie te kopiÃ«ren, openbaar te maken of op enige wijze te verspreiden.\n\nExterne links\nDe website kan links bevatten naar websites of bronnen van derden. Deze links zijn uitsluitend opgenomen ter informatie en gebruiksgemak. Berendsen Advocatuur heeft geen zeggenschap over de inhoud van deze externe websites of bronnen en aanvaardt geen enkele aansprakelijkheid for de inhoud, juistheid, beschikbaarheid of werking daarvan, noch for het gebruik dat daarvan wordt gemaakt.`
    }
  };

  return (
    <div className="min-h-screen">
      {/* Legal Modal Overlay */}
      <AnimatePresence>
        {modalContent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-legal-navy/90 backdrop-blur-sm"
            onClick={() => setModalContent(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-legal-slate w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-3xl p-8 md:p-16 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setModalContent(null)}
                className="absolute top-6 right-6 p-2 text-legal-navy/30 hover:text-legal-navy transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-legal-gold mb-6 block">Informatie</span>
              <h2 className="serif text-3xl md:text-5xl font-light text-legal-navy mb-10 border-b border-legal-navy/5 pb-8">{modalContent.title}</h2>
              <div className="text-legal-navy/70 leading-relaxed space-y-6 text-sm md:text-base whitespace-pre-wrap font-book">
                {modalContent.content}
              </div>
              <div className="mt-16 pt-8 border-t border-legal-navy/5 text-center">
                <button 
                  onClick={() => setModalContent(null)}
                  className="px-10 py-4 bg-legal-navy text-legal-slate rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-legal-gold transition-all"
                >
                  Sluiten
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 ${
          isScrolled ? 'bg-legal-slate/95 backdrop-blur-md border-b border-legal-navy/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs md:text-sm tracking-widest uppercase font-medium">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="serif text-xl md:text-2xl font-bold tracking-tight text-legal-navy uppercase leading-none">Berendsen <br className="md:hidden" /><span className="text-legal-gold">Vastgoedrecht</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              if (link.name === 'Over') {
                return (
                  <div key={link.name} className="relative group py-2 cursor-pointer">
                    <button 
                      onClick={() => navigateToSection(link.href)}
                      className="hover:text-legal-gold transition-all duration-300 flex items-center gap-1 uppercase font-medium text-xs md:text-sm tracking-widest bg-transparent cursor-pointer"
                    >
                      {link.name}
                    </button>
                    {/* Hover Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-32 bg-white border border-legal-navy/5 shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <button 
                        onClick={() => {
                          setCurrentPage('team');
                          window.scrollTo({ top: 0, behavior: 'instant' });
                        }}
                        className="block w-full text-center px-4 py-2 hover:bg-legal-slate text-legal-navy hover:text-legal-gold transition-colors text-[10px] font-bold tracking-widest uppercase cursor-pointer"
                      >
                        Team
                      </button>
                    </div>
                  </div>
                );
              }
              return (
                <button 
                  key={link.name} 
                  onClick={() => navigateToSection(link.href)}
                  className="hover:text-legal-gold transition-all duration-300 uppercase font-medium text-xs md:text-sm tracking-widest bg-transparent cursor-pointer"
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-legal-slate pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center text-lg uppercase tracking-widest font-medium">
              {navLinks.map((link) => {
                if (link.name === 'Over') {
                  return (
                    <div key={link.name} className="flex flex-col">
                      <button 
                        onClick={() => {
                          setMobileMenuOpen(false);
                          navigateToSection(link.href);
                        }}
                        className="py-4 border-b border-legal-navy/5 uppercase text-lg font-medium tracking-widest bg-transparent"
                      >
                        {link.name}
                      </button>
                      <button 
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setCurrentPage('team');
                          window.scrollTo({ top: 0, behavior: 'instant' });
                        }}
                        className="py-2 text-xs font-bold text-legal-gold tracking-widest hover:text-legal-navy transition-colors text-center w-full uppercase"
                      >
                        Team
                      </button>
                    </div>
                  );
                }
                return (
                  <button 
                    key={link.name} 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigateToSection(link.href);
                    }}
                    className="py-4 border-b border-legal-navy/5 uppercase text-lg font-medium tracking-widest bg-transparent"
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {currentPage === 'home' && (
        <>
          {/* Hero Section */}
          <header className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            alt="Real estate office" 
            className="w-full h-full object-cover opacity-15"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-legal-slate" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-10 max-w-5xl"
        >
          <span className="block text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-legal-gold mb-16 mt-8">
            Berendsen Advocatuur | Vastgoedrecht
          </span>
          <h1 className="serif text-5xl md:text-[5.5rem] font-light leading-[1.1] text-legal-navy mb-12 tracking-tight px-4">
            Scherpte en Focus <br />
            <span className="italic font-normal text-legal-gold">in Vastgoedrecht.</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <a 
              href="#contact"
              className="inline-block px-12 py-5 bg-legal-navy text-legal-slate rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-legal-gold hover:scale-105 transition-all shadow-xl shadow-legal-navy/10"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>

        {/* Minimal Scroll Line */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="w-[1px] h-16 bg-linear-to-b from-legal-gold to-transparent opacity-30" />
        </div>
      </header>

      {/* Expertise Section */}
      <section id="expertise" className="py-32 bg-white border-y border-legal-navy/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20 text-center">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-legal-gold mb-4 block">Gespecialiseerde Expertise</span>
            <h2 className="serif text-4xl md:text-6xl font-light tracking-tight text-legal-navy underline decoration-legal-gold/20 underline-offset-8 decoration-1 italic">Vastgoed & Recht</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 bg-legal-slate/30 border border-legal-navy/5 shadow-sm hover:shadow-xl hover:shadow-legal-navy/5 transition-all duration-500 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="mb-8 p-4 rounded-xl bg-white border border-legal-navy/5 text-legal-gold w-fit shadow-xs">
                    {service.icon}
                  </div>
                  <h3 className="serif text-xl font-bold mb-4 text-legal-navy">{service.title}</h3>
                  <p className="text-sm text-legal-navy/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section id="over" className="py-32 bg-legal-slate border-b border-legal-navy/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10 border border-legal-navy/5">
              <img 
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2070" 
                alt="Law library" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-legal-gold/10 rounded-full blur-3xl z-0" />
            <div className="absolute -top-10 -left-10 text-legal-gold/30 scale-[5] z-0 opacity-10 serif italic font-bold">V</div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-legal-gold mb-4 block">Over het kantoor</span>
            <h2 className="serif text-4xl md:text-5xl font-light leading-tight mb-8 text-legal-navy">
              Meesterschap in <br />
              <span className="italic text-legal-gold font-normal">Vastgoed & Recht.</span>
            </h2>
            <div className="space-y-6 text-legal-navy/80 leading-relaxed text-sm md:text-base">
              <p>
                Berendsen Advocatuur is een gespecialiseerd niche-kantoor onder leiding van Janneke Berendsen, dat zich concentreert op de juridische dynamiek van vastgoed. 
              </p>
              <p>
                Er wordt geadviseerd en geprocedeerd over vrijwel alle aspecten binnen het vastgoedrecht en huurrecht. Door de jarenlange ervaring wordt er snel en efficient gewerkt.
              </p>
            </div>
          </div>
        </div>
      </section>
        </>
      )}

      {currentPage === 'team' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pt-32 pb-24 px-6 md:px-12 bg-white text-legal-navy"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left side: Bio */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-legal-gold mb-6 block">Over Ons Team</span>
              <h1 className="serif text-4xl md:text-6xl font-light text-legal-navy mb-4">
                mr. Janneke Berendsen
              </h1>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-legal-gold/80 mb-10 block font-mono">
                Oprichter & Advocaat
              </span>

              <div className="space-y-6 text-legal-navy/80 leading-relaxed text-sm md:text-base mb-12">
                <p>
                  Janneke Berendsen is oprichter en advocaat bij Berendsen Advocatuur. Zij adviseert en procedeert op het gebied van (commercieel) vastgoed, bouwrecht en huurrecht. Met haar deskundigheid en pragmatische instelling begeleidt zij clienten bij aan- en verkoop, huur- en bouwgeschillen en complexe vastgoedrechtelijke trajecten.
                </p>
                <p>
                  Zij heeft een ruime ervaring opgebouwd met het schrijven, beoordelen en uitonderhandelen van onder meer koopovereenkomsten, huurovereenkomsten, aannemingsovereenkomsten en strategische samenwerkingsovereenkomsten. Daarnaast adviseert zij geregeld bij due diligence onderzoeken, vastgoedtransacties, alsmede overige vraagstukken op het snijvlak van vastgoedrecht en verbintenissenrecht.
                </p>
              </div>

              {/* Registratieblock */}
              <div className="p-8 bg-legal-slate border border-legal-navy/5 rounded-3xl">
                <h2 className="serif text-xl font-bold text-legal-navy mb-4 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-legal-gold" />
                  Rechtsgebiedenregister
                </h2>
                <div className="text-sm text-legal-navy/70 leading-relaxed font-sans">
                  Janneke Berendsen heeft in het rechtsgebiedenregister van de Nederlandse Orde van Advocaten het hoofdrechtsgebied <strong>Vastgoedrecht</strong> geregistreerd. Op grond van deze registratie is zij verplicht elk kalenderjaar volgens de normen van de Nederlandse Orde van Advocaten tien opleidingspunten te behalen op dit geregistreerde hoofdrechtsgebied.
                </div>
              </div>

              {/* Back button */}
              <div className="mt-16 pt-8 border-t border-legal-navy/10 flex justify-start">
                <button 
                  onClick={() => {
                    setCurrentPage('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-legal-navy text-legal-slate rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-legal-gold hover:scale-105 transition-all shadow-md shadow-legal-navy/10 cursor-pointer"
                >
                  Terug naar de voorpagina
                </button>
              </div>
            </div>

            {/* Right side: Portrait (Passport style, compact, half size) */}
            <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center">
              <div className="relative">
                <div className="aspect-[3/4] w-[180px] rounded-2xl overflow-hidden shadow-2xl relative z-10 border border-legal-navy/5 bg-legal-slate/30">
                  {imgError ? (
                    <div className="w-full h-full flex flex-col justify-center items-center bg-legal-navy text-legal-slate p-6 text-center select-none">
                      <span className="serif text-5xl font-light text-legal-gold tracking-widest mb-2">JB</span>
                      <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-legal-gold/70">Berendsen</span>
                    </div>
                  ) : (
                    <img 
                      src={imgSrc} 
                      onError={handleImgError}
                      alt="mr. Janneke Berendsen - Oprichter en Advocaat" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>
                {/* Visual Accent shapes */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-legal-gold/10 rounded-full blur-2xl z-0" />
                <div className="absolute -top-6 -right-6 text-legal-gold/30 scale-[4] z-0 opacity-10 serif italic font-bold">J</div>
              </div>

              {/* Direct Contact Block below photo */}
              <div className="mt-8 pt-8 border-t border-legal-navy/10 w-full flex flex-col items-center text-center">
                <span className="text-[10px] uppercase tracking-widest font-bold text-legal-gold block mb-4 font-mono">Contact</span>
                <div className="flex flex-col gap-3">
                  <a href="tel:+31652313507" className="inline-flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold hover:text-legal-gold transition-colors font-mono text-legal-navy">
                    <Phone className="w-3.5 h-3.5 text-legal-gold hover:scale-110 transition-transform" />
                    +31 (0)6 52 31 35 07
                  </a>
                  <a href="mailto:janneke@berendsenadvocatuur.nl" className="inline-flex items-center justify-center gap-2.5 text-xs sm:text-[13px] font-semibold hover:text-legal-gold transition-colors font-mono text-legal-navy">
                    <Mail className="w-3.5 h-3.5 text-legal-gold hover:scale-110 transition-transform" />
                    janneke@berendsenadvocatuur.nl
                  </a>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      )}

      {currentPage === 'home' && (
        <>
          {/* Pillars Section - Lexterrae Style center piece */}
          <section id="aanpak" className="py-32 px-6 md:px-12 bg-white text-legal-navy border-b border-legal-navy/5">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col h-full"
                >
                  <span className="text-legal-gold border-b border-legal-gold/30 pb-3 mb-6 inline-block text-lg uppercase tracking-widest font-bold">Deskundigheid</span>
                  <p className="text-sm font-medium leading-relaxed opacity-90">
                    Specialistische kennis van huurrecht, vastgoedrecht and procesrecht. Focus op diepgang en kwaliteit in elk dossier.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col h-full"
                >
                  <span className="text-legal-gold border-b border-legal-gold/30 pb-3 mb-6 inline-block text-lg uppercase tracking-widest font-bold">Ervaring</span>
                  <p className="text-sm font-medium leading-relaxed opacity-90">
                    Jarenlange ervaring met het adviseren in complexe dossiers en procederen in de dynamische vastgoedmarkt.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col h-full"
                >
                  <span className="text-legal-gold border-b border-legal-gold/30 pb-3 mb-6 inline-block text-lg uppercase tracking-widest font-bold">Persoonlijke aanpak</span>
                  <div className="text-sm font-medium leading-relaxed opacity-90">
                    Toegankelijke en persoonlijke begeleiding waarbij de belangen van de client het uitgangspunt vormen. Met korte lijnen en een op de situatie toegesneden ondersteuning.
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col h-full"
                >
                  <span className="text-legal-gold border-b border-legal-gold/30 pb-3 mb-6 inline-block text-lg uppercase tracking-widest font-bold">Heldere communicatie</span>
                  <div className="text-sm font-medium leading-relaxed opacity-90">
                    Zelfs complexe juridische vraagstukken worden helder uiteegenzet, met een gerichte aanpak die uitmondt in een realistische en houdbare oplossing.
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Big Contact CTA */}
          <section id="contact" className="py-60 bg-legal-slate border-y border-legal-navy/5 text-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.12),transparent_50%)] pointer-events-none" />
            <div className="max-w-5xl mx-auto relative z-10">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-legal-gold mb-10 block">Contact</span>
              <h2 className="serif text-5xl md:text-7xl font-light text-legal-navy mb-8 leading-tight">Direct juridisch advies van een expert</h2>
              <p className="text-legal-navy/70 mb-16 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
                Voor een vrijblijvend kennismakingsgesprek over uw juridische vraagstuk kan direct contact worden opgenomen.
              </p>
              <div className="space-y-6">
                <a href="tel:+31652313507" className="serif text-5xl md:text-[5.5rem] lg:text-[6.5rem] font-light text-legal-navy hover:text-legal-gold transition-all duration-300 block tracking-tight leading-none">
                  +31 (0)6 52 31 35 07
                </a>
                <a href="mailto:janneke@berendsenadvocatuur.nl" className="serif text-xl md:text-4xl font-light text-legal-navy/80 hover:text-legal-gold transition-all duration-300 block">
                  janneke@berendsenadvocatuur.nl
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="bg-legal-navy text-legal-slate/40 py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <span className="serif text-2xl font-bold tracking-tight text-legal-slate uppercase mb-6 block">Berendsen <span className="text-legal-gold">Vastgoedrecht</span></span>
            <p className="max-w-xs text-sm leading-relaxed">
              Amsterdam
            </p>
          </div>
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-widest mb-6">Expertise</h4>
            <ul className="text-xs space-y-4">
              <li>Huurrecht</li>
              <li>Vastgoedrecht</li>
              <li>Procesrecht</li>
              <li>Contractenrecht</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-widest mb-6">Contact</h4>
            <ul className="text-xs space-y-4">
              <li className="flex items-center gap-2">
                <Phone className="w-3 h-3 text-legal-gold" />
                <a href="tel:+31652313507" className="hover:text-white transition-colors">+31 (0)6 52 31 35 07</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3 h-3 text-legal-gold" />
                <a href="mailto:janneke@berendsenadvocatuur.nl" className="hover:text-white transition-colors text-[10px]">janneke@berendsenadvocatuur.nl</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-[10px] uppercase tracking-widest">
          <p>© 2026 Berendsen Vastgoedrecht. Alle rechten voorbehouden.</p>
          <div className="flex gap-8">
            <button onClick={() => setModalContent(legalDocs.privacy)} className="hover:text-white transition-colors cursor-pointer text-left">Privacyverklaring</button>
            <button onClick={() => setModalContent(legalDocs.terms)} className="hover:text-white transition-colors cursor-pointer text-left">Algemene Voorwaarden</button>
            <button onClick={() => setModalContent(legalDocs.complaints)} className="hover:text-white transition-colors cursor-pointer text-left">Kantoorklachtenregeling</button>
            <button onClick={() => setModalContent(legalDocs.usage)} className="hover:text-white transition-colors cursor-pointer text-left">Gebruiksvoorwaarden website</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
