// "use client";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { IoLocationOutline } from "react-icons/io5";
import Section from "./Section";
import H2 from "./typography/H2";
import P from "./typography/P";
import { BsArrowUpRight } from "react-icons/bs";
import AnimatedMap from "./AnimatedMap";
import { useTranslations } from "next-intl";

// const position = { lat: 42.5535341, lng: 21.8966355 };
// export default function FindUs() {
//   return (
//     <Section>
//       <div className="w-1/2  rounded-xl overflow-hidden border border-primary-dark">
//         <MapContainer
//           center={position}
//           zoom={15}
//           scrollWheelZoom={false}
//           className="h-96"
//         >
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           <Marker position={position}>
//             <Popup>
//               A pretty CSS3 popup. <br /> Easily customizable.
//             </Popup>
//           </Marker>
//         </MapContainer>
//       </div>
//     </Section>
//   );
// }

export default function FindUs() {
  const t = useTranslations("FindUsPage");
  return (
    <Section id="findus">
      <div className="flex flex-col md:flex-row gap-10 items-center md:justify-between">
        <div className="space-y-10 w-full md:w-1/3">
          <H2>{t("headline")}</H2>
          <P>{t("description")}</P>
          <P className=" text-primary-light cursor-pointer">
            <a
              className="flex items-center gap-2"
              target="_blank"
              href="https://www.google.com/maps/dir//Partizanska+10,+%D0%92%D1%80%D0%B0%D1%9A%D0%B5+17500/@42.5535046,21.8142347,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x13551fd00ab1435b:0xd438c5b441835fb0!2m2!1d21.8966355!2d42.5535341?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
            >
              <IoLocationOutline />
              <span>Partizanska 10, Vranje</span>
            </a>
          </P>
        </div>
        <AnimatedMap />
      </div>
    </Section>
  );
}
