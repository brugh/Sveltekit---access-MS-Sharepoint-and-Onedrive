<script lang="ts">
	export let person: string;
</script>

<mgt-person person-query={person} view="oneLine" person-card="hover">
  <template data-type="error">
    {'{{error}}'}
  </template>
	<template data-type="person-card">
    <mgt-person-card inherit-details>
			<template data-type="additional-details">
				<mgt-get resource="/users/{'{{ person.id }} '}/profile" version="beta">
					<template>
						<div>
							<div data-if="positions && positions.length">
								<h4>Work history</h4>
								<div data-for="position in positions">
									<b>{'{{ position.detail.jobTitle }} '}</b>
									({'{{ position.detail.company.department }} '})
								</div>
								<hr />
							</div>
							<div data-if="projects && projects.length">
								<h4>Project history</h4>
								<div data-for="project in projects">
									<b>{'{{ project.displayName }} '}</b>
								</div>
								<hr />
							</div>
							<div data-if="educationalActivities && educationalActivities.length">
								<h4>Educational Activities</h4>
								<div data-for="edu in educationalActivities">
									<div data-if="edu.program.displayName">
										<b>program:</b>
										{'{{ edu.program.displayName }} '}
									</div>
									<div data-if="edu.institution.displayName">
										<b>Institution:</b>
										{'{{ edu.institution.displayName }} '}
									</div>
								</div>
								<hr />
							</div>
							<div>
								<h4>Interests</h4>
								<span data-for="interest in interests">
									{'{{ interest.displayName }} '}<span data-if="$index < interests.length - 1"
										>,
									</span>
								</span>
								<hr />
							</div>
							<div data-if="languages && languages.length">
								<h4>Languages</h4>
								<span data-for="language in languages">
									{'{{ language.displayName }} '}<span data-if="$index < languages.length - 1"
										>,
									</span>
								</span>
							</div>
						</div>
					</template>
				</mgt-get>
			</template>
		</mgt-person-card>
	</template>
</mgt-person>

<style>
  pre { background: white;}
</style>