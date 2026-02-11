// pages/ticorporate.tsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Ticorporate: React.FC = () => {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const handleImageClick = () => {
    setIsEnlarged(!isEnlarged);
  };

  return (
    <main className="ticorporatePage">
      <div className="ticoText">
        <h1>Tänne ticorporatesta tietoja ja kuvat karuselli itemiin</h1>
        <h2>Projektin kuvaus</h2>
        <p>
          PACKY on suunniteltu työkaluksi aloitteleville sovelluskehittäjille.
          Sovellus tarjoaa vaihtoehtoja teknologiaratkaisuista käyttäjän
          suunnittelemalle sovellukselle, tämän valitsemien teknologioiden sekä
          sovelluksen ominaisuuksien perusteella.
        </p>

        <p>
          Sovelluksen pohjana toimi keväälle suunniteltu Software
          Engineering-kurssin projekti, josta muokattiin toimivampi ja parempi
          kokonaisuus.
        </p>

        <h2>Rooli</h2>

        <p>
          Pääroolini projektissa oli frontend-kehittäjä ja vastasin pääasiassa
          tilanhallinnasta. Sivuroolinani oli tarkoitus toimia testaajana, mutta
          tilanhallinta ja muut frontend-kehitystehtävät vaativat sen verran
          paljon aikaa, että sovimme auttavani Matiasta tarvittaessa testauksen
          kanssa. TC-Hopsissa toivomani tekninen rooli siis järjestyi.
        </p>

        <p>
          Projektin aikana osallistuin myös sisällöntuotantoon, eri toimintojen
          suunnitteluun ja toteutukseen, saavutettavuuden parantamiseen sekä
          optimointiin. Käytimme projektiin Reactin Next.js -frameworkia,
          tilanhallintaan käytin Redux toolkit sekä Redux-Persist -kirjastoja.
        </p>

        <h2>Käyttämäni teknologiat ja työkalut</h2>

        <ul className="teknologiat">
          <li>VSCode</li>
          <li>Next.js</li>
          <li>React</li>
          <li>Redux</li>
          <li>Redux-Persist</li>
          <li>Github</li>
          <li>Git</li>
        </ul>

        <h2>Projektin alku</h2>

        <p>
          Ennen Ticorporate -projektin alkamista minulla oli kohtuu vahva luotto
          omiin kykyihini sovelluskehityksessä, olisin sitten tekemisissä
          frontendin taikka backendin parissa ja tiedonhakutaitoihini sekä
          oppimis/soveltamiskykyyni. Luottamuksestani huolimatta, projektin
          alkaessa ja tilanhallinnan laskeutuessa harteilleni, jännitys kasvoi
          hieman johtuen suhteellisen pienestä kokemuksesta Next.js frameworkin
          sekä yleisesti tilanhallinnan käytöstä, jota oli aiemmilla kursseilla
          käyty läpi vähäisesti. Kuten jo aiemmin mainittu tilanhallintaa varten
          valitsin Reduxin, joka on hieman vanhahtava, mutta lukiessani
          opinnäytetyötä Reactin tilanhallintajärjestelmistä päädyin tähän
          valintaan. Projektin alku olikin osaltani kertausta Next.js käytöstä
          ja dokumentaatiosta, sekä Reduxin dokumentaation läpikäynnistä ja
          harjoittelusta.
        </p>

        <p>
          Kokemukseni sovelluskehityksestä ryhmänä rajautui jo mainittuun kevään
          Software Engineering-kurssiin ja näin suuren skaalan projekti tuli
          myös uutena tuttavuutena. Aiempi tausta projekteista oli suurimmalta
          osin kurssien lopputöiden parissa, eivätkä nämä olleet lähellekään
          samalla seinällä Ticorporaten kanssa. Tiimityö sinänsä oli itselleni
          tuttua ja koen olevani vastuullinen, niin sanotusti helppo työkaveri.
          Tämän vuoksi olin suhteellisen varma, ettei sen suhteen tulisi
          ongelmia ja koin tiimityöskentelyn olevan itselleni melko suuri
          vahvuus. Yleisesti ottaen SCRUM metodi ja yleiset pelisäännöt saatiin
          ratkaistua helposti sekä kehitysympäristö pystyyn nopeasti.
        </p>

        <h2>Mitä Ticorporate opetti ja suurimmat onnistumiset</h2>

        <p>
          TC-Hops keskustelussa kerroinkin tavoitteenani olevan tekninen rooli
          ja kehittyminen niin sovelluskehittäjän teknisessä osaamisessa kuin
          myös itseluottamuksen kasvattamisessa omaan osaamiseeni.
          Tarkoituksenani oli myös kehittää taitojani projektityössä ja parantaa
          ymmärrystäni sovelluskehityksen eri vaiheista sekä vahvistaa
          ymmärrystä ja valmiutta työelämää varten. Mielestäni saavutin
          asettamani tavoitteet, jotka asetin itselleni.
        </p>

        <p>
          Syitä luottamukseeni ovat seuraavanlaiset asiat: harjaannuin Next.js
          käytössä ja ymmärrykseni/osaamiseni sovelluskehityksessä parani jo
          syventymällä Angularin jälkeen toisenlaiseen frameworkiin. Next.js
          käyttö opetti käyttämään "vapaampaa" sovelluskehystä, tarkoittaen
          käytettävien välineiden valintaa kun Angular sisältää paljon enemmän
          valmiita ratkaisuja esimerkiksi tilanhallinnan suhteen. Esimerkiksi
          tilanhallintaan olisi ollut erilaisia kirjastoja, joista valitsimme
          Reduxin. Kehysten välillä oli eroja myös esimerkiksi reitityksessä,
          kun Angularilla reititys tapahtuu manuaalisesti ja Next.js käyttää
          tiedostopohjaista reititystapaa. Koen, että henkilökohtaisesti uuden
          "vapaamman" kehyksen käyttäminen antoi minulle perspektiiviä varsinkin
          käytettävien ratkaisujen suhteen ja niiden tekemisestä. Tilanhallinnan
          toteutus syvensi tietämystäni ja osaamistani monellakin tapaa,
          esimerkiksi Storen määrittely ja käyttöönotto sovelluksessa, tilan
          tallentuminen sovellukselle oikeanlaisella tavalla (aluksi tallennus
          localstorageen, kun taas lopussa muutos sessionstorageen), tilan
          välittäminen/muuttaminen eri komponenteissa funktioilla.
          Tilanhallinnan lisäksi pääsin kehittämään ja suunnittelemaan yleisesti
          toiminnallisuuksia kuten eri modaalien luomiseen, navigointiin
          sovelluksessa sekä saavutettavuuden kehittämiseen. Autoin myös
          backend-hakujen kanssa, ja yleisesti ongelmien tullessa eteen. Kurssin
          pituus ja sen sisältämät sprintit sekä demoesitykset myös laajensivat
          ymmärrystäni sovelluskehitysprojektin prosessista ja projektin
          pilkkomisesta pieniin osiin ja tärkeimpien asioiden tunnistamisessa
          tavoitteiden asettelussa yleisen projektityöskentelyn lisäksi.
        </p>

        <ul>
          <li>SCRUM-käytänteet:</li>
          <p>
            Ryhmällämme oli melko vapaamuotoinen/modifioitu lähestymistapa
            SCRUM-käytänteisiin, mikä ei välttämättä toimisi kaikissa ryhmässä,
            mutta meidän ryhmässämme se toimi moitteettomasti. Sprintit
            suunniteltiin ja pilkottiin yhdessä valkotaululle ja päivittäin
            kävimme läpi, mitä kullakin oli työn alla. Omalaatuinen käytäntömme
            toimi moitteettomasti, ja suurimmalta osalta saimme jokaiseen
            sprinttiin tehtyä suunnittelemamme tehtävät.
          </p>
          <p>
            Vaikka minulla olikin kevään kursseilta jo vähäinen kokemus
            SCRUM-projektista, ymmärrys eri roolien tehtäviin ja kokonaisuuden
            hallintaan kasvoi projektin aikana.
          </p>

          <li>Ryhmätyö: </li>
          <p>
            Nimenomaan sovelluskehityksen näkökulmasta, en ollut yksin vastuussa
            kaikesta vaan sain olla osana ryhmää mikä helpotti omalta osaltaan
            taakkaa kun tehtävät asiat pystyi jakamaan useamman henkilön kesken.
            Ryhmämme yhteistyö toimi muutenkin moitteitta ja kaikki kantoivat
            oman vetensä ja suorittivat roolinsa erittäin hyvin.
          </p>
          <p>
            Kommunikointi ryhmän sisällä toimi loistavasti ja kaikki antoivat
            sekä saivat apua tarvittaessa ryhmän muilta jäseniltä. Mikäli ryhmän
            jäsen sai omat tehtävänsä valmiiksi, tämä siirtyi oma-aloitteisesti
            tekemään seuraavaa asiaa, tai auttoi muita.
          </p>

          <li>Ongelmien/tavoitteiden pilkkominen</li>
          <p>
            Projektin edetessä, opin pilkkomaan ongelmia sekä saavutettavia
            tavoitteita mahdollisimman pieniin osiin, jotta suuremmatkin
            ongelmat/tavoitteet oli helpompaa ratkaista.
          </p>

          <li>Luottamusta omiin taitoihin ja ideoihin:</li>
          <p>
            Projektin edetessä sekä palaveroidessa ryhmän kesken, oman
            sovelluskehityksen, että avustaessa muita ongelmien kanssa huomasin
            omien taitojeni kehittyvän sekä sovelluskehyksen (Next.js)
            käytänteiden parissa, että yleisesti ottaen ongelmia ratkaistessa.
            Opin myös, että välillä kannattaa madaltaa rimaa tiedonhakuun,
            vaikka olisikin ns. "yksinkertainen" ongelma, jollaisen ennenkin on
            ratkaissut.
          </p>

          <li>Suunnittelun tärkeys:</li>
          <p>
            Projektin loppua kohden käydyissä palavereissa suunnittelu nousi
            aina suurempaan osaan mitä projektia aloittaessa, asiat pilkottiin
            todella pieniin osiin ja käytettiin enemmän aikaa miettimään
            ratkaisuja. Näin jälkeenpäin miettiessä olisi ollut hyvä suunnitella
            vielä tarkemmin projektin alussa esimerkiksi kaikki teknologiat,
            pilkkoa tavoitteet pienempiin osiin, jotta ne eivät vaikuta niin
            suurilta ja käydä läpi projektin kokonaiskuva mahdollisimman
            tarkasti. Vaikka sanoisinkin, että projektimme sujui vähintäänkin
            hyvin, huomasin itse alussa lieviä vaikeuksia sen suhteen, että
            lähdimme melko nopeasti tekemään koodia ja emme miettineet
            välttämättä esimerkiksi projektin kokoa riittävän tarkasti, toki
            esimerkiksi ensimmäisen demoesityksen jälkeen ymmärsimme saadusta
            palautteesta, että olimme lähteneet vähän liian laajalla skaalalla
            työskentelyyn.
          </p>
          <li>Asiakkaan vaikutus projektiin:</li>
          <p>
            Vaikka projektimme ei ollut ns. "asiakasprojekti", opettajien antama
            palaute esimerkiksi ensimmäisen demoesityksen jälkeen toimi niin
            sanotusti asiakaspalautteena, jonka jälkeen lähdimme muokkaamaan
            projektiamme yksinkertaisempaan suuntaan.
          </p>
        </ul>

        <p>
          {' '}
          Tekniseltä puolelta suurimmaksi onnistumisekseni lasken toimivan
          tilanhallinan luonnin ja uuden frameworkin oppimisen. Kun taas
          henkilökohtaisen kasvun ja projektityöskentelyn kannalta suurimmat
          onnistumiset olivat projektin syklien ja eri vaiheiden käytänteiden
          oppimisen ja ryhmätyöskentelyn kokemuksien saamisen sovelluskehityksen
          parissa. Koen myös tärkeänä mainita, että koko ryhmän toiminta ja
          lopputulos olivat suuria onnistumisia.
        </p>
      </div>
      <div className="images">
        <Image
          key={1}
          width={isEnlarged ? 1000 : 500}
          height={isEnlarged ? 600 : 300}
          src="/datareducer1.png"
          alt="Image 1"
          onClick={() => handleImageClick(1)}
        />
        <p>Image 1</p>

        <Image
          key={2}
          width={isEnlarged ? 1000 : 500}
          height={isEnlarged ? 600 : 300}
          src="/datareducer2.png"
          alt="Image 2"
          onClick={() => handleImageClick(2)}
        />
        <p>Image 2</p>

        <Image
          key={3}
          width={isEnlarged ? 1000 : 500}
          height={isEnlarged ? 600 : 300}
          src="/datareducer3.png"
          alt="Image 3"
          onClick={() => handleImageClick(3)}
        />
        <p>Image 3</p>

        <Image
          key={4}
          width={isEnlarged ? 1000 : 500}
          height={isEnlarged ? 600 : 300}
          src="/navigointifunktio.png"
          alt="Image 4"
          onClick={() => handleImageClick(4)}
        />
        <p>Image 4</p>

        <Image
          key={5}
          width={isEnlarged ? 1000 : 500}
          height={isEnlarged ? 600 : 300}
          src="/redux-devtools.png"
          alt="Image 5"
          onClick={() => handleImageClick(5)}
        />
        <p>Image 5</p>

        <Image
          key={6}
          width={isEnlarged ? 1000 : 500}
          height={isEnlarged ? 600 : 300}
          src="/saavutettavuus.png"
          alt="Image 6"
          onClick={() => handleImageClick(6)}
        />
        <p>Image 6</p>

        <Image
          key={7}
          width={isEnlarged ? 1000 : 500}
          height={isEnlarged ? 600 : 300}
          src="/stackbuildernappulat.png"
          alt="Image 7"
          onClick={() => handleImageClick(7)}
        />
        <p>Image 7</p>

        <Image
          key={8}
          width={isEnlarged ? 1000 : 500}
          height={isEnlarged ? 600 : 300}
          src="/storage.png"
          alt="Image 8"
          onClick={() => handleImageClick(8)}
        />
        <p>Image 8</p>

        <Image
          key={9}
          width={isEnlarged ? 1000 : 500}
          height={isEnlarged ? 600 : 300}
          src="/store.png"
          alt="Image 9"
          onClick={() => handleImageClick(9)}
        />
        <p>Image 9</p>

        <Image
          key={10}
          width={isEnlarged ? 1000 : 500}
          height={isEnlarged ? 600 : 300}
          src="/storets_persistConfig.png"
          alt="Image 10"
          onClick={() => handleImageClick(10)}
        />
        <p>Image 10</p>

        <Image
          key={11}
          width={isEnlarged ? 1000 : 500}
          height={isEnlarged ? 600 : 300}
          src="/storewrap.png"
          alt="Image 11"
          onClick={() => handleImageClick(11)}
        />
        <p>Image 11</p>

        <Image
          key={12}
          width={isEnlarged ? 1000 : 500}
          height={isEnlarged ? 600 : 300}
          src="/tilanjaarvonesimerkki.png"
          alt="Image 13"
          onClick={() => handleImageClick(12)}
        />
        <p>Image 12</p>

        <Image
          key={13}
          width={isEnlarged ? 1000 : 500}
          height={isEnlarged ? 600 : 300}
          src="/tutorial.png"
          alt="Image 13"
          onClick={() => handleImageClick(13)}
        />
        <p>Image 13</p>

        <Image
          key={14}
          width={isEnlarged ? 1000 : 500}
          height={isEnlarged ? 600 : 300}
          src="/tutorialmodal.png"
          alt="Image 14"
          onClick={() => handleImageClick(14)}
        />
        <p>Image 14</p>

        <Image
          key={15}
          width={isEnlarged ? 1000 : 500}
          height={isEnlarged ? 600 : 300}
          src="/tutorialmodalinreitinkuuntelija.png"
          alt="Image 15"
          onClick={() => handleImageClick(15)}
        />
        <p>Image 15</p>

        <Image
          key={16}
          width={isEnlarged ? 1000 : 500}
          height={isEnlarged ? 600 : 300}
          src="/useEffectesimerkki.png"
          alt="Image 16"
          onClick={() => handleImageClick(16)}
        />
        <p>Image 16</p>
      </div>
    </main>
  );
};

export default Ticorporate;
