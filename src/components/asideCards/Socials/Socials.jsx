import {
  EnvelopeSimple,
  GithubLogo,
  Globe,
  LinkedinLogo,
  MapPin,
  Suitcase,
  TwitterLogo,
} from "phosphor-react";
import styles from "./Socials.module.css";

export function Socials() {
  return (
    <div className={styles.socials}>
      <ul>
        <li>
          <MapPin size={24} />
          <span>Local</span>
        </li>
        <li>
          <Suitcase size={24} />
          <span>Empresa</span>
        </li>
        <li>
          <GithubLogo size={24} />
          <span>GitHub</span>
        </li>
        <li>
          <LinkedinLogo size={24} />
          <span>Linkedin</span>
        </li>
        <li>
          <TwitterLogo size={24} />
          <span>Twitter</span>
        </li>
        <li>
          <Globe size={24} />
          <span>Site</span>
        </li>
        <li>
          <EnvelopeSimple size={24} />
          <span>E-mail</span>
        </li>
      </ul>
    </div>
  );
}
