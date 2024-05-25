import { FaJava, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { SiPostgresql, SiApachemaven, SiSpringboot, SiTypescript, SiVirtualbox, SiJavascript, SiPython, SiJunit5, SiReact, SiVuedotjs } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";

export type HardSkill = {
    name: string,
    logo: JSX.Element
}


export const hardSkillsList: HardSkill[] = [
    {
        name: 'Java',
        logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="75" viewBox="0 0 48 48"><path fill="#F44336" d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"></path><path fill="#F44336" d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"></path><g><path fill="#1565C0" d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"></path><path fill="#1565C0" d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"></path><path fill="#1565C0" d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"></path><path fill="#1565C0" d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"></path><path fill="#1565C0" d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"></path></g></svg>
    }, 
    {
        name: 'Spring Boot',
        logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="75" viewBox="0 0 40 40">
        <path fill="#fff" d="M63.266-77.509l-13.88-24.04c-1.96-3.39-5.61-5.5-9.53-5.5h-27.76c-3.92,0-7.57,2.11-9.53,5.5 l-13.88,24.04c-1.96,3.39-1.96,7.61,0,11l13.88,24.04c1.96,3.4,5.61,5.5,9.53,5.5h27.76c3.92,0,7.57-2.1,9.53-5.5l13.88-24.04 C65.226-69.899,65.226-74.119,63.266-77.509z M40.856-58.259c-3.58,3.97-8.49,6.31-13.83,6.59c-0.36,0.02-0.71,0.03-1.07,0.03 c-4.95,0-9.66-1.8-13.37-5.14c-8.2-7.38-8.87-20.06-1.48-28.27c0.57-0.63,1.18-1.23,1.83-1.78c1.25-1.08,3.14-0.94,4.23,0.32 c1.08,1.25,0.93,3.15-0.33,4.23c-0.44,0.38-0.87,0.8-1.27,1.25c-5.17,5.74-4.71,14.62,1.04,19.79c2.78,2.51,6.36,3.78,10.11,3.58 c3.74-0.2,7.18-1.84,9.68-4.62c5.17-5.74,4.7-14.62-1.04-19.79c-1.23-1.11-1.33-3.01-0.22-4.24c1.11-1.23,3-1.33,4.24-0.22 C47.576-79.149,48.236-66.469,40.856-58.259z M22.976-73.039v-16.96c0-1.66,1.35-3,3-3c1.66,0,3,1.34,3,3v16.96c0,1.65-1.34,3-3,3 c-0.82,0-1.58-0.34-2.12-0.88C23.316-71.459,22.976-72.219,22.976-73.039z M38.096,16.701l-6.2-10.5 c-0.56-0.95-1.35-1.73-2.27-2.27l-0.16-0.28h-0.34c-0.87-0.42-1.84-0.65-2.83-0.65h-12.63c-1,0-1.96,0.23-2.83,0.65h-0.44 l-0.22,0.37c-0.85,0.54-1.58,1.28-2.11,2.18l-6.2,10.5c-0.57,0.97-0.87,2.04-0.9,3.12l-0.1,0.18l0.1,0.18 c0.03,1.08,0.33,2.15,0.9,3.12l6.2,10.5c0.53,0.9,1.26,1.64,2.12,2.18l0.21,0.36h0.42c0.88,0.43,1.84,0.66,2.85,0.66h12.63 c1,0,1.97-0.23,2.85-0.66h0.32l0.15-0.26c0.93-0.55,1.72-1.32,2.28-2.28l6.2-10.5c0.6-1.02,0.9-2.16,0.9-3.3 S38.696,17.721,38.096,16.701z M15.656,25.071c2.66,2.4,6.78,2.18,9.17-0.48c2.4-2.66,2.18-6.78-0.48-9.17 c-0.62-0.56-0.67-1.51-0.11-2.12c0.55-0.62,1.5-0.67,2.12-0.11c3.89,3.5,4.2,9.52,0.7,13.41c-1.87,2.08-4.46,3.14-7.06,3.14 c-2.27,0-4.54-0.81-6.35-2.44c-3.89-3.5-4.21-9.52-0.7-13.41c0.27-0.3,0.56-0.59,0.86-0.85c0.63-0.54,1.58-0.46,2.12,0.16 c0.54,0.63,0.47,1.58-0.16,2.12c-0.21,0.18-0.41,0.37-0.6,0.58C12.776,18.561,12.996,22.681,15.656,25.071z M18.496,18.501v-7 c0-0.83,0.68-1.5,1.5-1.5c0.83,0,1.5,0.67,1.5,1.5v7c0,0.83-0.67,1.5-1.5,1.5C19.176,20.001,18.496,19.331,18.496,18.501z M33.126,85.461c-0.07-0.77-0.3-1.52-0.7-2.21l-4.33-7.5c-0.4-0.7-0.94-1.28-1.58-1.73l-0.3-0.52h-0.6 c-0.71-0.33-1.48-0.5-2.28-0.5h-8.66c-0.8,0-1.57,0.17-2.28,0.5h-0.6l-0.3,0.52c-0.64,0.45-1.18,1.03-1.58,1.73l-4.33,7.5 c-0.4,0.69-0.63,1.44-0.7,2.21l-0.3,0.52l0.29,0.51c0.07,0.78,0.3,1.56,0.71,2.26l4.33,7.5c0.41,0.71,0.97,1.31,1.62,1.76 l0.26,0.45h0.51c0.73,0.35,1.54,0.54,2.37,0.54h8.66c0.83,0,1.64-0.19,2.37-0.54h0.51l0.26-0.45c0.65-0.45,1.21-1.05,1.62-1.76 l4.33-7.5c0.41-0.7,0.64-1.48,0.71-2.26l0.29-0.51L33.126,85.461z M16.036,89.511c1.82,1.63,4.63,1.49,6.26-0.33 c1.64-1.82,1.49-4.62-0.33-6.26c-0.46-0.42-0.49-1.13-0.08-1.59c0.42-0.46,1.13-0.5,1.59-0.08c2.74,2.46,2.96,6.7,0.5,9.44 c-1.2,1.32-2.84,2.11-4.62,2.2c-0.12,0.01-0.24,0.01-0.36,0.01c-1.65,0-3.23-0.6-4.46-1.72c-1.33-1.19-2.11-2.83-2.21-4.61 c-0.09-1.79,0.52-3.5,1.71-4.83c0.19-0.21,0.39-0.41,0.61-0.59c0.47-0.41,1.18-0.35,1.59,0.12c0.4,0.47,0.35,1.18-0.12,1.58 c-0.15,0.13-0.28,0.26-0.41,0.4c-0.79,0.88-1.19,2.01-1.13,3.2C14.636,87.631,15.156,88.721,16.036,89.511z M17.876,85.851v-5.73 c0-0.62,0.51-1.12,1.13-1.12s1.12,0.5,1.12,1.12v5.73c0,0.62-0.5,1.13-1.12,1.13S17.876,86.471,17.876,85.851z M25.636,129.631 c-0.05-0.49-0.21-0.97-0.47-1.41l-2.05-3.49c-0.26-0.43-0.6-0.8-1.01-1.08l-0.18-0.3h-0.34c-0.46-0.23-0.97-0.35-1.49-0.35h-4.22 c-0.52,0-1.03,0.12-1.49,0.35h-0.26l-0.13,0.22c-0.46,0.28-0.85,0.68-1.13,1.16l-2.06,3.49c-0.29,0.49-0.45,1.02-0.48,1.57 l-0.11,0.19l0.11,0.19c0.02,0.56,0.18,1.11,0.48,1.61l2.06,3.49c0.29,0.49,0.69,0.9,1.17,1.19l0.09,0.15h0.18 c0.48,0.26,1.02,0.39,1.57,0.39h4.22c0.56,0,1.1-0.14,1.58-0.39h0.25l0.14-0.23c0.42-0.28,0.78-0.66,1.05-1.11l2.05-3.49 c0.27-0.45,0.43-0.95,0.47-1.46l0.2-0.34L25.636,129.631z M16.366,131.891c0.48,0.44,1.08,0.66,1.74,0.62 c0.64-0.03,1.24-0.32,1.67-0.8c0.43-0.47,0.65-1.09,0.62-1.74c-0.04-0.64-0.32-1.23-0.8-1.67c-0.25-0.22-0.27-0.6-0.04-0.84 c0.22-0.25,0.6-0.27,0.84-0.05c0.72,0.65,1.14,1.53,1.19,2.5c0.06,0.96-0.27,1.89-0.92,2.61c-0.64,0.72-1.53,1.14-2.5,1.19h-0.19 c-0.89,0-1.75-0.32-2.41-0.92c-0.72-0.65-1.15-1.54-1.2-2.5c-0.05-0.97,0.28-1.89,0.93-2.61c0.1-0.11,0.21-0.22,0.32-0.32 c0.25-0.22,0.63-0.19,0.85,0.06c0.22,0.25,0.19,0.63-0.06,0.84c-0.08,0.07-0.15,0.14-0.22,0.22c-0.43,0.48-0.65,1.1-0.62,1.74 C15.606,130.871,15.886,131.461,16.366,131.891z M17.376,130.001v-2.95c0-0.33,0.27-0.6,0.6-0.6c0.34,0,0.6,0.27,0.6,0.6v2.95 c0,0.33-0.26,0.6-0.6,0.6C17.646,130.601,17.376,130.331,17.376,130.001z"></path><path fill="#bae0bd" d="M29.626,3.931l-0.16-0.28h-19.07l-0.22,0.37l-9.21,15.8l-0.1,0.18l0.1,0.18l9.22,15.8l0.21,0.36 h19.07l0.15-0.26l9.38-16.08L29.626,3.931z M27.056,26.601c-1.87,2.08-4.46,3.14-7.06,3.14c-2.27,0-4.54-0.81-6.35-2.44 c-3.89-3.5-4.21-9.52-0.7-13.41c0.27-0.3,0.56-0.59,0.86-0.85c0.63-0.54,1.58-0.46,2.12,0.16c0.54,0.63,0.47,1.58-0.16,2.12 c-0.21,0.18-0.41,0.37-0.6,0.58c-2.39,2.66-2.17,6.78,0.49,9.17c2.66,2.4,6.78,2.18,9.17-0.48c2.4-2.66,2.18-6.78-0.48-9.17 c-0.62-0.56-0.67-1.51-0.11-2.12c0.55-0.62,1.5-0.67,2.12-0.11C30.246,16.691,30.556,22.711,27.056,26.601z M21.496,11.501v7 c0,0.83-0.67,1.5-1.5,1.5c-0.82,0-1.5-0.67-1.5-1.5v-7c0-0.83,0.68-1.5,1.5-1.5C20.826,10.001,21.496,10.671,21.496,11.501z"></path><path fill="#5e9c76" d="M38.096,16.701l-6.2-10.5c-0.56-0.95-1.35-1.73-2.27-2.27c-0.16-0.11-0.33-0.2-0.5-0.28 c-0.87-0.42-1.84-0.65-2.83-0.65h-12.63c-1,0-1.96,0.23-2.83,0.65c-0.23,0.11-0.45,0.23-0.66,0.37c-0.85,0.54-1.58,1.28-2.11,2.18 l-6.2,10.5c-0.57,0.97-0.87,2.04-0.9,3.12v0.36c0.03,1.08,0.33,2.15,0.9,3.12l6.2,10.5c0.53,0.9,1.26,1.64,2.12,2.18 c0.2,0.14,0.41,0.25,0.63,0.36c0.88,0.43,1.84,0.66,2.85,0.66h12.63c1,0,1.97-0.23,2.85-0.66c0.16-0.08,0.32-0.16,0.47-0.26 c0.93-0.55,1.72-1.32,2.28-2.28l6.2-10.5c0.6-1.02,0.9-2.16,0.9-3.3S38.696,17.721,38.096,16.701z M26.296,36.001h-12.63 c-1.94,0-3.75-1.04-4.74-2.7l-6.2-10.5c-1.02-1.73-1.02-3.87,0-5.6l6.2-10.5c0.99-1.66,2.8-2.7,4.74-2.7h12.63 c1.94,0,3.75,1.04,4.74,2.7l6.2,10.5c1.01,1.73,1.01,3.87,0,5.6l-6.2,10.5C30.046,34.961,28.236,36.001,26.296,36.001z"></path>
        </svg>
    },
    {
        name: 'HTML',
        logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="75" viewBox="0 0 48 48">
        <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
        </svg>
    },
    {
        name: 'CSS',
        logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="75" viewBox="0 0 48 48">
        <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
        </svg>
    },
    {
        name: 'JavaScript',
        logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="75" viewBox="0 0 48 48">
        <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
        </svg>
    },
    {
        name: 'TypeScript',
        logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="75" viewBox="0 0 48 48">
        <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path>
        </svg>
    },
    {
        name: 'React',
        logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="75" viewBox="0 0 48 48">
        <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
        </svg>
    },    
    {
        name: 'Vue.js',
        logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="75" viewBox="0 0 48 48">
        <polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"></polygon><polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"></polygon>
        </svg>
    },
    {
        name: 'Python',
        logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="75" viewBox="0 0 48 48">
        <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
        </svg>
    },
    {
        name: 'PostgreSQL',
        logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="75" viewBox="0 0 48 48">
        <path fill="#fff" d="M44.083,29.79c-0.183-0.829-0.935-1.796-2.452-1.796c-0.31,0-0.649,0.039-1.035,0.119c-0.708,0.146-1.311,0.217-1.842,0.241c4.133-7.04,6.816-16.819,4.159-20.214c-3.501-4.473-8.214-5.141-10.711-5.141L31.967,3c-0.929,0.015-1.893,0.129-2.863,0.339l-3.583,0.774C25.033,4.052,24.536,4.009,24.018,4l-0.03,0l-0.016,0l-0.152-0.001c-1.593,0-3.046,0.338-4.341,0.973l-1.251-0.493c-1.72-0.678-4.308-1.485-6.868-1.485c-0.144,0-0.287,0.003-0.431,0.008C8.407,3.093,6.241,4.05,4.664,5.769C2.696,7.915,1.8,11.054,2.003,15.1C2.013,15.309,4.461,36,11.4,36h0.025l0.064-0.001c0.901-0.022,1.76-0.384,2.563-1.077c0.613,0.46,1.406,0.732,2.145,0.84c0.488,0.115,1.366,0.278,2.418,0.278c1.284,0,2.442-0.263,3.44-0.738c-0.001,0.88-0.006,1.994-0.016,3.418l-0.001,0.075l0.005,0.075c0.097,1.419,0.342,2.698,0.711,3.701c1.051,2.859,2.866,4.434,5.111,4.434c0.093,0,0.188-0.003,0.284-0.009c1.846-0.114,3.717-1.151,5.004-2.772c1.393-1.755,1.715-3.607,1.839-5.026L35,39.111v-0.088v-4.079l0.103,0.01l0.436,0.038l0.042,0.004l0.042,0.002c0.124,0.006,0.252,0.008,0.381,0.008c1.507,0,3.362-0.391,4.616-0.974C41.819,33.476,44.559,31.948,44.083,29.79z"></path><path fill="#0277bd" d="M33,34c0-0.205,0.012-0.376,0.018-0.565C33.008,33.184,33,33,33,33s0.012-0.009,0.032-0.022c0.149-2.673,0.886-3.703,1.675-4.29c-0.11-0.153-0.237-0.318-0.356-0.475c-0.333-0.437-0.748-0.979-1.192-1.674l-0.082-0.158c-0.067-0.164-0.229-0.447-0.435-0.819c-1.183-2.14-3.645-6.592-1.96-9.404c0.738-1.232,2.122-1.942,4.121-2.117C33.986,11.718,30.925,6.115,23.985,6c-0.002,0-0.004,0-0.006,0c-6.041-0.098-8.026,5.392-8.672,8.672c0.89-0.377,1.906-0.606,2.836-0.606c0.014,0,0.029,0,0.043,0c2.29,0.017,3.865,1.239,4.323,3.354c0.335,1.552,0.496,2.91,0.492,4.153c-0.01,2.719-0.558,4.149-1.042,5.411l-0.154,0.408c-0.124,0.334-0.255,0.645-0.379,0.937c-0.126,0.298-0.237,0.563-0.318,0.802c0.484,0.11,0.864,0.265,1.125,0.38l0.151,0.066c0.047,0.02,0.094,0.043,0.137,0.069c0.848,0.516,1.376,1.309,1.489,2.233c0.061,0.498,0.051,3.893,0.03,6.855c0.087,1.285,0.305,2.364,0.593,3.146c0.409,1.114,1.431,3.241,3.394,3.119c1.37-0.085,2.687-0.919,3.561-2.019c0.938-1.181,1.284-2.487,1.414-3.958V34z"></path><path fill="#0277bd" d="M15.114 28.917c-1.613-1.683-2.399-3.947-2.104-6.056.285-2.035.124-4.027.037-5.098-.029-.357-.048-.623-.047-.77 0-.008.002-.015.003-.023 0-.004-.002-.007-.002-.011.121-3.021 1.286-7.787 4.493-10.62C15.932 5.724 13.388 4.913 11 5 7.258 5.136 3.636 7.724 4 15c.137 2.73 3.222 19.103 7.44 19 .603-.015 1.229-.402 1.872-1.176 1.017-1.223 2.005-2.332 2.708-3.104C15.705 29.481 15.401 29.217 15.114 28.917zM37.023 14.731c.015.154.002.286-.022.408.031.92-.068 1.813-.169 2.677-.074.636-.15 1.293-.171 1.952-.021.645.07 1.282.166 1.956.225 1.578.459 3.359-.765 5.437.225.296.423.571.581.837 4.61-7.475 6.468-16.361 4.695-18.626C38.655 5.944 34.941 4.952 31.999 5c-.921.015-1.758.139-2.473.294C34.602 7.754 36.863 13.026 37.023 14.731zM41 30.071c-2.665.55-3.947.257-4.569-.126-.1.072-.2.133-.293.19-.372.225-.961.583-1.105 2.782.083.016.156.025.246.044L35.714 33c1.32.06 3.049-.31 4.063-.781C41.962 31.205 43.153 29.627 41 30.071zM22.023 32.119c-.037-.298-.198-.539-.492-.732l-.108-.047C21.062 31.181 20.653 31 20 31h-.004c-.127.01-.253.019-.38.019-.052 0-.103-.007-.155-.009-.474.365-1.148.647-2.816.99-2.98.759-1.221 1.655-.078 1.794 1.106.277 3.735.614 5.481-.809C22.043 32.537 22.035 32.229 22.023 32.119z"></path><path fill="#0277bd" d="M20.681 18.501c-.292.302-.753.566-1.262.484-.828-.134-1.463-1.133-1.417-1.508h0c.044-.374.751-.569 1.578-.435.287.047.548.128.768.228-.32-.688-.899-1.085-1.782-1.182-1.565-.174-3.226.644-3.56 1.097.007.11.02.251.033.417.093 1.147.265 3.284-.05 5.537-.208 1.485.393 3.169 1.567 4.395.757.79 1.641 1.29 2.513 1.438.111-.478.309-.944.513-1.425.113-.265.233-.547.346-.852l.162-.427c.443-1.155.9-2.35.909-4.703C21.003 20.66 20.892 19.627 20.681 18.501zM34.847 22.007c-.104-.729-.211-1.484-.185-2.303.023-.742.105-1.442.184-2.119.062-.533.11-1.045.138-1.55-1.289.107-2.145.479-2.551 1.108.168-.057.358-.102.568-.129.892-.116 1.543.141 1.618.637.055.363-.253.705-.388.836-.277.269-.626.442-.981.488-.064.008-.129.012-.192.012-.353 0-.69-.121-.949-.3.112 1.973 1.567 4.612 2.283 5.907.153.277.271.498.369.688C35.154 24.163 35.009 23.143 34.847 22.007z"></path>
        </svg>
    },
    {
        name: 'Node.js',
        logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="75" viewBox="0 0 48 48">
        <path fill="#388e3c" d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"></path><path fill="#37474f" d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"></path><path fill="#2e7d32" d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path><path fill="#4caf50" d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path><path fill="#37474f" d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"></path>
        </svg>
    },
    {
        name: 'Git',
        logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="75" viewBox="0 0 48 48">
        <path fill="#F4511E" d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"></path>
        </svg>
    },
    {
        name: 'Oracle VM VirtualBox',
        logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="75" viewBox="0 0 48 48">
        <path fill="#47667f" d="M36,35.5C36,29.7,30.9,25,24.5,25S13,29.7,13,35.5S18.1,46,24.5,46S36,41.3,36,35.5z"></path><path fill="#c5cad5" d="M35.5,35c0-5.3-4.9-9.6-11-9.6s-11,4.3-11,9.6s4.9,9.6,11,9.6S35.5,40.3,35.5,35z"></path><path fill="#c5cad5" d="M5,10l19,11v22L6,30L5,10z"></path><path fill="#6d83b3" d="M43,10L24,21v22l18-13L43,10z"></path><path fill="#5a6e91" d="M24.5,44.6c0.3,0,0.5,0,0.8,0l9.8-7.1c0.2-0.8,0.4-1.6,0.4-2.4c0-0.1,0-0.2,0-0.3L24,43l-10.5-7.6 c0.1,1,0.3,2,0.7,3l8.3,6C23.2,44.5,23.8,44.6,24.5,44.6z"></path><path fill="#eaf4f8" d="M5,10l19,11l19-11L24,1L5,10z"></path><path fill="#34495e" d="M11.6 9.9L24 17l12.4-7.1L24 4 11.6 9.9zM40 28l.6-12.9L27 23v14.4L40 28zM8 28L7.4 15.1 21 23v14.4L8 28z"></path><path fill="#eaf4f8" d="M29.7 16.4L26.6 14.4 28.3 10.6 23.7 12.2 25.4 8.5 17.7 11 20.7 6.9 18.8 5.9 19.2 5.1 22.2 6.5 20.3 9.1 27.1 6.8 25.6 10.5 30.2 8.9 27.9 14 30.3 15.6z"></path><path fill="#ecf0f1" d="M28.8 27.4c.1.5-.5 2.8-.5 3.1 0 .3-.2.5-.5.6-.1-.9-.2-1.7-.3-2.6 0-.2.2-.3.4-.4.1.7.1 1.4.2 2.1 0 0 .3-1.5.4-2.3C28.5 27.7 28.6 27.5 28.8 27.4zM38.8 22.4c-.1.3-.1.8-.5 1 0-.3.1-.5.2-.7.2-.4.2-.9 0-1.3-.1-.2.1-.3.2-.4.2-.1.1.2.3.2.2-.2.1-.6.4-.7.1.1 0 .2-.1.3-.2.5-.3 1 0 1.5.1.2 0 .3-.2.4 0 0-.1.1-.2-.1C38.8 22.6 38.8 22.5 38.8 22.4zM29 30c0-.6.1-1.2.1-1.8 0-.2.1-.4.3-.4 0 .7-.1 1.4-.1 2.1 0 .2-.1.2-.2.3C29 30.2 29 30 29 30zM29.5 26.8c.2.1 0 .4 0 .5 0 .1-.1.2-.2.2-.1 0-.1-.1-.1-.2C29.1 27.2 29.3 26.7 29.5 26.8zM19.8 29.7c-.4-.3-.7-.5-1.2-.8.1.4.2.7.5.9.3.2.5.4.8.6.1.1.2.1.1.3-.1.2-.2.1-.3 0-.9-.5-1.4-1.2-1.5-2.2 0-.1 0-.2 0-.3 0-.2 0-.5.3-.6.2-.1.4.1.5.2.2.2.5.3.7.5.1.1.2.2.1.3-.1.2-.2 0-.3 0-.2-.1-.3-.2-.5-.3-.1-.1-.4-.3-.4 0 0 .3 0 .3.2.4.3.2.6.4.9.7C19.9 29.4 19.9 29.4 19.8 29.7zM18.3 29.3c.1.1-.1.3-.2.2-.4-.3-.7-.5-1.1-.8-.2-.1-.2-.3-.2-.4-.1-.7-.1-1.4-.2-2.1 0-.1 0-.1.1-.1.1.1.2.2.2.3 0 .4.1.8.1 1.2.1.7.2.9.7 1.1C17.9 28.9 18 29 18.3 29.3zM29.8 29.6c0-.7.1-1.4.1-2.1 0-.2 0-.2.3-.2.1 0 .2-.4.4-.5 0 .2 0 .4-.2.6-.2.2-.2.4-.2.6 0 .4-.1.7-.1 1.1C30.2 29.4 30.1 29.5 29.8 29.6zM35.3 25.3c-.1 0-.2 0-.1-.1 0-.5.1-2 .2-2.3 0-.1.1-.3-.1-.3-.1 0-.2.1-.2.2-.1.3-.3 2.8-.1 3.1C35.1 26 35.3 25.6 35.3 25.3zM31.6 26.1c0 0-.2.2-.2 0 0-.2 0-.3 0-.5-.2 0-.2.1-.2.3 0 .3 0 .5-.3.8 0 0-.1.2 0 .2.2.4.1.7.1 1.1 0 .2-.1.6.1.7.3.1.5-.6.5-.6-.2 0-.2-.3-.2-.5 0-.4-.1-.8.3-1.1C31.7 26.4 31.6 26.3 31.6 26.1zM37.6 21.7c-.5.4-.6 1.1-.6 1.8 0 .3 0 .8.5.6.8-.4.7-1.3.7-2.1C38.2 21.5 38 21.4 37.6 21.7zM37.5 23.5c-.1 0-.1-.3-.1-.4 0-.4.1-1.1.4-1.1.1 0 .1.1.1.2C37.9 22.6 37.8 23.5 37.5 23.5zM12.7 25.6c-.2-.1-.3-.2-.4-.4-.3-.5-.5-1-.8-1.5.3.2.7.4.8.3.2-.2-.2-.6-.3-.7-.2-.1-.4-.3-.7-.5 0 .3.1 1.3.1 1.7 0 .1.1.2-.1.2-.1 0-.2-.1-.2-.2-.1-.4-.3-2.3-.2-2.4.7.5 1.6.9 1.7 2 0 .4-.1.6-.5.6.1.3.3.5.4.8C12.7 25.4 12.9 25.5 12.7 25.6zM16.4 27.8c-.3-.2-.5-.4-.8-.6-.4-.4-.6-.9-.6-1.4 0-.3.2-.4.5-.2.2.1.4.3.6.4.1 0 .1.2.2 0 .1-.1.1-.2-.1-.3-.3-.2-.6-.4-.9-.6-.2-.1-.4-.2-.5.1-.2.7 0 1.3.3 1.9.3.5.7.7 1.1 1.1 0 0 .2.2.3 0C16.6 28 16.6 27.9 16.4 27.8z"></path><path fill="#ecf0f1" d="M10.7 22.1c-.3-.6-1.4-1.2-1.4-1.3-.4-.3-.6-.2-.7.3 0 .4.1.7.2 1.1.2.8.8 1.2 1.4 1.6.5.3.7.2.7-.3C11 23 10.9 22.3 10.7 22.1zM10.6 23.3c-.1.1-.1.2-.3.1-.7-.2-1.4-1.1-1.4-1.9 0-.1 0-.3.1-.4.2-.1.3 0 .4.1.6.4 1.1.8 1.2 1.6C10.7 23.1 10.7 23.2 10.6 23.3zM36.8 23.4c-.2-.3-.1-.6 0-.9 0-.1.2-.7-.3-.7-.3 0-.7.4-.7.7-.1.5-.2 2.8-.2 2.8.3-.2.6-.4.8-.7C36.7 24.3 36.9 23.8 36.8 23.4zM36.4 23.9c0 .3-.1.5-.4.7 0-.3 0-.5 0-.7 0-.2.1-.3.3-.3C36.4 23.6 36.4 23.8 36.4 23.9zM36.4 22.6c0 .2-.1.4-.4.6 0-.3 0-.5 0-.7 0-.1.1-.2.2-.2C36.5 22.4 36.5 22.5 36.4 22.6zM33 25.1c-.3 0-.3.3-.3.4 0 0-.1 1.6-.1 1.7-.1.1-.1.2-.2.2-.1 0-.1-.2-.1-.3 0-.4 0-.7.1-1.1 0-.1.1-.4-.1-.3-.3 0-.3.3-.3.5 0 .5-.1.9-.1 1.4 0 .3.1.6.4.4.1-.1.3-.3.3-.5.4.1.3-.3.4-.5.1-.5.1-1 .1-1.5C33.1 25.4 33.1 25.2 33 25.1zM14.2 25.1c-.1-.3-.3-.7-.4-1 0-.1-.1-.2-.2-.2-.1 0-.1.1-.2.2l-.6 1.6c0 .1.2.3.4.1.1-.1.3-1 .5-1.4l.5 1.3c-.3 0-.6-.4-.7-.3-.2.2.4.6.7.8.2.1.3.5.4.6 0 .1.2.4.4.2C14.7 26.4 14.5 25.8 14.2 25.1zM33.9 24.3c-.6.4-.6.8-.4.8.1-.1.1-.2.2-.2.1-.1.2-.2.3-.1s.1.3 0 .4c-.1.1-.1.1-.2.2-.3.3-.5.8-.5 1.2 0 .1 0 .3.1.3.1 0 .2 0 .3-.1.1-.2.3-.4.6-.5 0-.6.1-1.1.1-1.9C34.4 24.1 34.1 24.2 33.9 24.3zM33.8 26.3c-.1 0-.1 0-.1 0 0-.3.1-.4.4-.6 0 0 0 0 0 0C34.1 25.9 34 26.1 33.8 26.3z"></path>
        </svg>
    }
]

export const softSkills = [
    "Persévérance",
    "Refléxion analytique et logique",
    "Curiosité",
    "Rigueur",
    "Faculté d'apprentissage",
    "Capacité de remise en question",
    "Capacité d'écoute",
    "Esprit d'équipe",
    "Adaptabilité"
] 