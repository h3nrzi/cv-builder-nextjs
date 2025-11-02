'use client';
import { useState, useEffect, useCallback } from 'react';
import { CVData } from '@/types/theme';
import { sampleCVData } from '@/data/sample-cv';

const STORAGE_KEY = 'cv-builder-data';
const AUTOSAVE_DELAY = 1000; // 1 second

export function useCVData() {
  const [cvData, setCVData] = useState<CVData>(sampleCVData);
  const [isLoading, setIsLoading] = useState(true);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        // Validate data structure before using it
        if (isValidCVData(parsedData)) {
          setCVData(parsedData);
          setLastSaved(new Date(localStorage.getItem(`${STORAGE_KEY}_timestamp`) || Date.now()));
        }
      }
    } catch (error) {
      console.error('Error loading CV data from localStorage:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const saveToLocalStorage = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cvData));
      localStorage.setItem(`${STORAGE_KEY}_timestamp`, new Date().toISOString());
      setLastSaved(new Date());
      setHasUnsavedChanges(false);
    } catch (error) {
      console.error('Error saving CV data to localStorage:', error);
    }
  }, [cvData]);

  // Auto-save to localStorage with debouncing
  // ! todo improve logic clean code
  useEffect(() => {
    if (!isLoading && hasUnsavedChanges) {
      const timeoutId = setTimeout(() => {
        saveToLocalStorage();
      }, AUTOSAVE_DELAY);

      return () => clearTimeout(timeoutId);
    }
    return undefined;
  }, [cvData, isLoading, hasUnsavedChanges, saveToLocalStorage]);

  const updateCVData = useCallback((newData: Partial<CVData>) => {
    setCVData(prev => ({ ...prev, ...newData }));
    setHasUnsavedChanges(true);
  }, []);

  const updatePersonalInfo = useCallback((personalInfo: Partial<CVData['personal']>) => {
    setCVData(prev => ({
      ...prev,
      personal: { ...prev.personal, ...personalInfo },
    }));
    setHasUnsavedChanges(true);
  }, []);

  const updateSummary = useCallback((summary: string) => {
    setCVData(prev => ({ ...prev, summary }));
    setHasUnsavedChanges(true);
  }, []);

  const updateSkills = useCallback((skills: CVData['skills']) => {
    setCVData(prev => ({ ...prev, skills }));
    setHasUnsavedChanges(true);
  }, []);

  const updateExperience = useCallback((experience: CVData['experience']) => {
    setCVData(prev => ({ ...prev, experience }));
    setHasUnsavedChanges(true);
  }, []);

  const updateEducation = useCallback((education: CVData['education']) => {
    setCVData(prev => ({ ...prev, education }));
    setHasUnsavedChanges(true);
  }, []);

  const updateProjects = useCallback((projects: CVData['projects']) => {
    setCVData(prev => ({ ...prev, projects }));
    setHasUnsavedChanges(true);
  }, []);

  const updateLanguages = useCallback((languages: CVData['languages']) => {
    setCVData(prev => ({ ...prev, languages }));
    setHasUnsavedChanges(true);
  }, []);

  const updateInterests = useCallback((interests: CVData['interests']) => {
    setCVData(prev => ({ ...prev, interests }));
    setHasUnsavedChanges(true);
  }, []);

  const resetToSample = useCallback(() => {
    setCVData(sampleCVData);
    setHasUnsavedChanges(true);
  }, []);

  const exportData = useCallback(() => {
    const dataStr = JSON.stringify(cvData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = `cv-data-${new Date().toISOString().split('T')[0]}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }, [cvData]);

  const importData = useCallback(async (file: File): Promise<boolean> => {
    try {
      const text = await file.text();
      const importedData = JSON.parse(text);

      if (isValidCVData(importedData)) {
        setCVData(importedData);
        setHasUnsavedChanges(true);
        return true;
      } else {
        console.error('Invalid CV data format');
        return false;
      }
    } catch (error) {
      console.error('Error importing CV data:', error);
      return false;
    }
  }, []);

  return {
    cvData,
    isLoading,
    lastSaved,
    hasUnsavedChanges,
    updateCVData,
    updatePersonalInfo,
    updateSummary,
    updateSkills,
    updateExperience,
    updateEducation,
    updateProjects,
    updateLanguages,
    updateInterests,
    resetToSample,
    exportData,
    importData,
    saveToLocalStorage,
  };
}

// Type guard to validate CV data structure
function isValidCVData(data: any): data is CVData {
  return (
    data &&
    typeof data === 'object' &&
    data.personal &&
    typeof data.personal.name === 'string' &&
    typeof data.personal.email === 'string' &&
    typeof data.summary === 'string' &&
    Array.isArray(data.skills) &&
    Array.isArray(data.experience) &&
    Array.isArray(data.projects) &&
    Array.isArray(data.education)
  );
}
