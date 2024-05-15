'use client'
import { useEffect, useState } from "react";
import { schoolProjects, personnalProjects } from '../../data/projects';
import ProjectThumbnail from "./ProjectThumbnail";
import TechnoTools from "../../data/TechnoTool";
import Title from "../title/Title";
import './ProjectListStyle.scss';
import SubTitle from "../title/SubTitle";

type Project = {
    title: string,
	slug: string,
    tags: string[],
    thumbnail: string,
    scholarYear: string,
    description: string,
    team: string,
    participation: string[],
    technosTools: TechnoTools[],
    skills: string[]
}

export default function ProjectList () {

    const [schoolProjectsList, setSchoolProjects] = useState<Project[]>([]);
    const [personnalProjectsList, setPersonnalProjects] = useState<Project[]>([]);

	useEffect(() => setSchoolProjects(schoolProjects), []);
	useEffect(() => setPersonnalProjects(personnalProjects), []);

	return (
		<div className="projects">
			<div className="projects__header">
				<Title text="Réalisations" />
			</div>
			<div>
				<SubTitle text="Projets scolaires"/>
				<div className="projects__list">
					{schoolProjectsList?.map(({slug, title, thumbnail, scholarYear, technosTools}) => (
						<div key={`scholar-project-${title.toLowerCase().replaceAll(' ', '-')}`} className="project">
							<ProjectThumbnail
										slug={slug}
										title={title}
										thumbnail={thumbnail}
										scholarYear={scholarYear}
										technosTools={technosTools}
							/>
						</div>
					))}
				</div>
			</div>
			<div>
				<SubTitle text="Projets peronnels"/>
				<div className="projects__list">
					{personnalProjectsList?.map(({slug, title, thumbnail, technosTools}) => (
						<div key={`project-${title.toLowerCase().replaceAll(' ', '-')}`} className="project">
							<ProjectThumbnail
										slug={slug}
										title={title}
										thumbnail={thumbnail}
										technosTools={technosTools}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);

}