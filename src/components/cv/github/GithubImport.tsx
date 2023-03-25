import { useLazyQuery } from '@apollo/client';
import {
  EuiButton,
  EuiButtonSize,
  EuiCallOut,
  EuiFieldText,
  EuiFormRow,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiSpacer,
  EuiText,
} from '@elastic/eui';
import {
  GET_PROFILE_FROM_GITHUB,
  GetProfileFromGithubData,
  GetProfileFromGithubVars,
} from 'lp-project-1/lib/gql/queries/getProfileFromGithub';
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Person } from 'src/components/cv/types';

export interface GitHubImportProps {
  buttonSize: EuiButtonSize;
  person: Person;
  setPerson: Dispatch<SetStateAction<Person>>;
}

export const GithubImport: FC<GitHubImportProps> = ({
  buttonSize,
  person,
  setPerson,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const [githubUsername, setGithubUsername] = useState('');

  const [performQuery, { data, loading, error }] = useLazyQuery<
    GetProfileFromGithubData,
    GetProfileFromGithubVars
  >(GET_PROFILE_FROM_GITHUB);

  const fetchFromGitHub = () => {
    performQuery({
      variables: {
        username: githubUsername,
      },
    });
  };

  useEffect(() => {
    if (!data?.profile) {
      return;
    }

    const [firstName = '', lastName = ''] = (
      data.profile?.fullName ?? ' '
    ).split(' ');

    const skillTitles = [
      ...new Set(
        data.profile?.repositories?.nodes.flatMap(({ languages }) =>
          languages.nodes.map(({ name }) => name)
        )
      ),
    ];

    const skills = skillTitles.map(title => ({ title }));

    setPerson({
      ...person,
      firstName,
      lastName,
      title: data.profile.positionTitle,
      skills,
    });
  }, [data?.profile, person, setPerson]);

  return (
    <>
      <EuiButton onClick={showModal} size={buttonSize} color="text" fill>
        GitHub Import
      </EuiButton>
      {isModalVisible && (
        <EuiModal onClose={closeModal}>
          <EuiModalHeader>
            <EuiModalHeaderTitle size="s">
              Import data from GitHub
            </EuiModalHeaderTitle>
          </EuiModalHeader>
          <EuiModalBody>
            {!!error && (
              <>
                <EuiCallOut title="Error" color="danger">
                  <EuiText size="s">{error.message}</EuiText>
                </EuiCallOut>
                <EuiSpacer size="m" />
              </>
            )}
            <EuiFormRow label="GitHub username" fullWidth>
              <EuiFieldText
                fullWidth
                value={githubUsername}
                disabled={loading}
                onChange={e => setGithubUsername(e.target.value)}
              />
            </EuiFormRow>
          </EuiModalBody>
          <EuiModalFooter>
            <EuiButton
              size="s"
              onClick={fetchFromGitHub}
              isDisabled={loading}
              iconType="check"
              color="success"
              fullWidth>
              Confirm
            </EuiButton>
          </EuiModalFooter>
        </EuiModal>
      )}
    </>
  );
};
